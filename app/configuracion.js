import {useFocusable, FocusContext} from "@noriginmedia/norigin-spatial-navigation";
import styles from "@/app/page.module.css";
import ConfiguracionButton from "@/app/configuracionButton";

export default function Configuracion () {

    const { ref, focusKey } = useFocusable();

    return (
        <FocusContext.Provider value={focusKey}>
            <div ref={ref} className={styles.rightContentConfiguracion}>
                <h1 style={{marginTop: '5rem', marginBottom: '2rem'}}>Preferencia de Navegación</h1>
                <ConfiguracionButton flagRtl={false} />
                <ConfiguracionButton flagRtl={true} />
            </div>
        </FocusContext.Provider>
    )
}