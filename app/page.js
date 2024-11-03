import Dashboard from "@/app/dashboard";
import Error from "@/app/error";

export default async function Page() {

    // Arrays auxiliares de grupos de películas y series que vamos a buscar
    // 1) 3 slides para sección "Películas"
    let array1 = ['titanic', 'hannibal', 'jumanji', 'back', 'jane', 'joe', 'good', 'amy', 'pulp']
    let array2 = ['omen', 'future', 'destiny', 'return', 'spider', 'batman', 'real', 'social', 'blue']
    let array3 = ['shining', 'fly', 'black', 'requiem for', 'up', 'tokyo', 'mononoke', 'john', 'right']
    // 2) 2 slides para sección "Series"
    let array4 = ['dark', 'bad', 'friends', 'simpsons', 'the sopranos', 'dragon ball', 'lost', 'dexter', 'the walking']
    let array5 = ['six feet under', 'the white lotus', 'the office', 'suits', 'ncis', 'fargo', 'the wire', 'peaky', 'last of us']
    // 3) 1 grilla para sección "Destacados"
    let array6 = ['gonjiam', 'cube', 'pulp fiction', 'saw', 'the others', 'airplane', 'joker', 'chaco', 'gran torino', 'metropolis', 'full metal jacket', 'oppenheimer', 'the lobster', 'persona', 'inland empire', 'kwaidan', 'old', 'macbeth']

    // Función de fetch custom
    // Iteramos sobre los arrays auxiliares y por cada uno llenamos de data un array vacío que retornamos
    const fetchData = async searchStringsArray => {

        let emptyArray = []

        for ( let i = 0; i < searchStringsArray.length; i++ ) {
            let data = await fetch(`https://www.omdbapi.com/?t=${searchStringsArray[i]}&apikey=e634d1d1`)
            let movie = await data.json()
            emptyArray.push(movie)
        }

        return emptyArray
    }

    /*
        El método usado para conseguir la data termina siendo conciso pero poco elegante.
        De haber tenido más tiempo hubiera optado por conseguir una API pública que sea más eficiente, en tanto
        la elegida hace sólo consultas que redundan en un solo resultado por cada una.
    */
    try {
        const [
            movieSlide1,
            movieSlide2,
            movieSlide3,
            movieSlide4,
            movieSlide5,
            movieSlide6] = await Promise.all([
            fetchData(array1),
            fetchData(array2),
            fetchData(array3),
            fetchData(array4),
            fetchData(array5),
            fetchData(array6),
        ])

        // Al renderizar, pasamos la data obtenida al primer componente de cliente
        return <Dashboard
            movieSlide1={movieSlide1}
            movieSlide2={movieSlide2}
            movieSlide3={movieSlide3}
            movieSlide4={movieSlide4}
            movieSlide5={movieSlide5}
            movieSlide6={movieSlide6}
        />
    }
    catch (e) {
        console.log(e)
        return <Error/>
    }
}
