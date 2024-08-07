const fs = require("fs");

let rutaArchivo = "./src/archivos/archivoSync.txt";
let texto1 =
    " SYNCEsse elit esse sunt culpa labore pariatur occaecat. Mollit exercitation consequat ad nisi ea in. In irure do ad labore ea esse labore incididunt Lorem nostrud est nostrud elit sit. Incididunt est dolor nisi Lorem anim qui laboris laborum enim irure do. Commodo fugiat anim consequat cillum elit qui in minim nostrud velit irure.";
let texto2 =
    "ASYNC Aliquip nostrud minim ipsum proident laborum incididunt voluptate nostrud enim laborum veniam magna ullamco ipsum. Ea ipsum tempor esse mollit nisi cupidatat nulla nulla amet. Proident aute enim officia culpa duis duis. In sunt veniam laboris do aliquip qui aliqua dolor nulla in laborum deserunt magna velit. Culpa ea officia duis sint est laborum enim reprehenderit ea ex duis eu.";
fs.writeFileSync(
    rutaArchivo,
    texto1,
    { encoding: "utf-8" } /*Ese es el encoding por defecto si no se coloca*/
);

let datosArchivo = fs.readFileSync(
    rutaArchivo,
    { encoding: "utf-8" } /*en este caso no se puede omitir para leer*/
);

fs.appendFileSync(rutaArchivo, "\n\n\tTEXTO AGREGADO AL FINAL");

console.log(datosArchivo);

setTimeout(() => fs.unlinkSync(rutaArchivo), 2000);

fs.existsSync(rutaArchivo)
    ? console.log("El archivo existe")
    : console.log("El archivo no existe");
//Js dirá que existe porque setTimeout es async

//METODOS ASYNC
fs.writeFile(rutaArchivo, texto2, (error) => {
    if (error) {
        console.log(error.message);
        return;
    } else {
        console.log("Archivo generado");
        fs.readFile(rutaArchivo, { encoding: "utf-8" }, (error, datosArchivo) => {
            if (error) {
                console.log(error.message);
            } else {
                console.log(datosArchivo);
            }
            fs.appendFile(rutaArchivo, "\n\nLINEA TEXTO AGREGADA AL FINAL", error => {
                if (error) {
                    console.log(error.message)
                    return
                }
                console.log("Archivo modificado")
            })
        });
    }
});
