import Modal from "react-modal";
import Image from "next/image";
import styles from "@/app/page.module.css";
import {useFocusable, FocusContext} from "@noriginmedia/norigin-spatial-navigation";
import {useEffect} from "react";

const ModalButton = ({ closeModal }) => {

    const { ref, focused } = useFocusable({
        onEnterPress: () => closeModal()
    });

    return <div ref={ref} onClick={closeModal} className={styles.movieDetailsButtonFocused}>Cerrar</div>
}

const ModalContent = ({ modalContent, closeModal }) => {

    const { ref, focusKey, focusSelf } = useFocusable({
        isFocusBoundary: true, focusBoundaryDirections: []
    });

    useEffect(() => {
        focusSelf();
    }, [focusSelf]);

    if ( !modalContent ) return null;

    return (
        <FocusContext.Provider value={focusKey}>
            <div ref={ref} style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{width: '50%', margin: '20px'}}>
                    <h1>{modalContent.Title}</h1><br/>
                    <div>{modalContent.Year}</div><br/>
                    <div>{modalContent.Runtime}</div><br/>
                    <div>{modalContent.Genre}</div><br/>
                    <span>Director: </span><span>{modalContent.Director}</span><br/><br/>
                    <span>Elenco: </span><span>{modalContent.Actors}</span><br/><br/>
                    <span>Imdb: </span><span>{modalContent.imdbRating}</span><br/><br/>
                    <div>{modalContent.Plot}</div><br/><br/>
                    <div>{modalContent.Runtime}</div><br/>
                    <ModalButton closeModal={closeModal}/>
                </div>
                <div style={{position: 'relative', width: '50%'}}>
                    <Image
                        src={modalContent.Poster}
                        fill={true}
                        alt={modalContent.Title}
                    />
                </div>
            </div>
        </FocusContext.Provider>
    )
}

export default function PopUp ({ modalIsOpen, closeModal, modalContent }) {

    const { ref, focusKey } = useFocusable();

    return (
        <FocusContext.Provider value={focusKey}>
            <Modal
                ref={ref}
                isOpen={modalIsOpen}
                style={{
                    overlay: {
                        zIndex: 9,
                        backgroundColor: 'rgba(0, 0, 0, .8)'
                    },
                    content: {
                        width: '60%',
                        height: 'fit-content',
                        margin: 'auto',
                        backgroundColor: 'black',
                        borderColor: 'black',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    }
                }}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
                closeTimeoutMS={200}
            >
                <ModalContent modalContent={modalContent} closeModal={closeModal} />
            </Modal>
        </FocusContext.Provider>
    )
}