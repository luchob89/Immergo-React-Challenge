import {updateRtl, useFocusable} from "@noriginmedia/norigin-spatial-navigation";
import styles from "@/app/page.module.css";
import {useState} from "react";

export default function ConfiguracionButton ({ flagRtl, setReverseOrder }) {

    // Se usó esta variable de estado para el handleo onEnterPress de la Navegación Espacial: para saber onEnter cuál es el botón
    // seleccionado por el usuario.
    const [selected, setSelected] = useState(null);

    const { ref, focused, focusSelf } = useFocusable({
        onFocus: el => setSelected( el.node.innerText === 'Izquierda a Derecha' ? 'ltr' : 'rtl' ),
        onEnterPress: () => selected === 'ltr' ? handleClick(false) : handleClick(true)
    });

    // Handleo de click en uno de los botones
    const handleClick = rtl => {
        // Hacemos foco en el mismo
        focusSelf()

        // Modificamos la preferencia según en qué botón apretó el usuario
        if (rtl) {
            updateRtl(true)
            setReverseOrder(true)
        }
        else {
            updateRtl(false)
            setReverseOrder(false)
        }
        // Informamos el éxito de la operación
        alert('Cambio realizado exitosamente.')
    }

    return <div
        ref={ref}
        onClick={ () => { handleClick(flagRtl) } }
        className={focused ? styles.buttonConfigFocused : styles.buttonConfig}
    >
        { flagRtl ? 'Derecha a Izquierda' : 'Izquierda a Derecha' }
    </div>

}