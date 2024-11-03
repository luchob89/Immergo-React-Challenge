import {useFocusable, FocusContext} from "@noriginmedia/norigin-spatial-navigation";
import styles from "@/app/page.module.css";
import ConfiguracionButton from "@/app/configuracionButton";

export default function Configuracion ({ setReverseOrder }) {

    const { ref, focusKey } = useFocusable();

    return (
        <FocusContext.Provider value={focusKey}>
            <div ref={ref} className={styles.rightContentConfiguracion}>
                <h1>Preferencia de Navegación</h1>
                <ConfiguracionButton flagRtl={false} setReverseOrder={setReverseOrder} />
                <ConfiguracionButton flagRtl={true} setReverseOrder={setReverseOrder} />
            </div>
        </FocusContext.Provider>
    )
}