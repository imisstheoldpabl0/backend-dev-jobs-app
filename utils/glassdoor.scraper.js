const puppeteer = require("puppeteer");

// Creamos una función para extraer la información de cada producto
const extractJobData = async (url, browser) => {

    try {
        // Creamos un objeto vacío donde almacenaremos la información de cada producto
        const jobData = {}
        // Abrimos una nueva pestaña
        const page = await browser.newPage()
        // Accedemos al link de cada producto que nos llega por parámetros
        await page.goto(url)

        // Utilizamos el método newPage.$eval(selector, function) y almacenamos en productData:

        // title
        jobData['title'] = await page.$eval(".JobDetails_jobDetailsHeader__Hd9M3 h1", title => title.innerHTML)

        // company name
        jobData['company_name'] = await page.$eval(".EmployerProfile_employerInfo__d8uSE h4", company_name => company_name.innerHTML)

        //descripción
        jobData['description'] = await page.$eval(".JobDetails_jobDescription__uW_fK", description => description.innerText.slice(0, 500) + '...')

        // location
        jobData['location'] = await page.$eval(".JobDetails_location__mSg5h", price => price.innerHTML)

        // logo
        jobData['logo'] = await page.$eval(".EmployerLogo_logoContainer__o39lB img", logo => logo.src)

        // link
        jobData['link'] = await page.url()

        return jobData // Devuelve los datos de un producto
        // insert many mongo
    }
    catch (err) {
        // Devolvemos el error 
        return { error: err }
    }
}


const scrap = async (url) => {
    try {
        // Creamos un array vacío scrapedData donde almacenaremos la información obtenida del scraping
        const scrapedData = []
        // inicializamos una instancia del navegador (browser) con puppeteer.launch() y añadimos en el objeto de configuración la opción headless
        console.log("Opening the browser......");
        const browser = await puppeteer.launch({ headless: false })

        // Abrimos una nueva pestaña en el navegador creando una instancia con el método newPage() a la que llamaremos page
        const page = await browser.newPage();
        // Indicamos la url que debe cargarse en la pestaña con page.goto(url)
        await page.goto(url);
        console.log(`Navigating to ${url}...`);

        // Extraemos todos los links a los que luego navegaremos para obtener el detalle de cada producto

        // Utilizamos el método $$eval(selector, callback) para capturar una colección de nodos y aplicar la lógica que necesitemos
        // En este caso , en el CB filtramos el array de items, guardando en un nuevo array

        /********** A RELLENAR page.$eval(selector, function)  *********/
        //const tmpurls = await page.$$eval(selector,funcion)

        const tmpurls = await page.$$eval(".JobsList_wrapper__EyUF6 ul li div div .jobCard div .JobCard_jobTitle___7I6y", rest => rest.map(a => a.href));

        //Quitamos los duplicados
        const urls = await tmpurls.filter((link, index) => { return tmpurls.indexOf(link) === index })

        console.log("url capuradas", urls)
        // Me quedo con los 20 primeros productos, porque sino es muy largo
        const urls2 = urls.slice(0, 9);

        // Filtramos los productos
        // Extraemos el dato de cada producto
        // await extractProductData(urls2[productLink],browser)

        console.log(`${urls2.length} links encontrados`);

        
        // Iteramos el array de urls con un bucle for/in y ejecutamos la promesa extractProductData por cada link en el array. Luego pusheamos el resultado a scraped data
        for (jobLink in urls2) {
            const job = await extractJobData(urls2[jobLink], browser)
            scrapedData.push(job)
        }

        console.log(scrapedData, "Lo que devuelve mi función scraper", scrapedData.length)

        
        // cerramos el browser con el método browser.close
        await browser.close()
        // Devolvemos el array con los productos
        return scrapedData;

    } catch (err) {
        console.log("Error:", err);
    }
}

exports.scrap = scrap;

/********** DESCOMENTAR PARA PROBAR *********/
scrap("https://www.glassdoor.es/Empleo/web-developer-empleos-SRCH_KO0,13.htm?seniorityType=entrylevel").then(data => console.log(data))