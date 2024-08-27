document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalInfo = document.getElementById('modal-info');
    const closeModal = document.getElementById('close');

    // Datos de los conectores
    const connectors = {
        "Todos": {
            "PCIe": {
                "description": "Ranura para tarjetas gráficas y otros dispositivos. Permite la conexión de tarjetas de expansión y ofrece un alto ancho de banda, ideal para aplicaciones que requieren un rendimiento gráfico elevado.",
                "type": "Ranura",
                "speed": "Hasta 32 GT/s",
                "image": "https://hardzone.es/app/uploads-hardzone.es/2019/11/Puertos-PCIe-x4-01.jpg"
            },
            "DIMM": {
                "description": "Ranura para módulos de memoria RAM. Soporta diferentes tipos de memoria, como DDR4 y DDR5, y es crucial para el rendimiento del sistema.",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz9wtcsQddziE1E-Z8Vj0LFj0NPB2156TmVA&s",
                "type": "Ranura",
                "speed": "Dependiente del módulo"
            },
            "USB": {
                "description": "Puertos para dispositivos USB. Permiten la conexión de periféricos como teclados, ratones y unidades de almacenamiento, con velocidades que varían según la versión (USB 2.0, 3.0, 3.1).",
                "image": "https://www.profesionalreview.com/wp-content/uploads/2020/09/C%C3%B3mo-solucionar-velocidad-usb-5.jpg",
                "type": "Puerto",
                "speed": "Hasta 10 Gbps (USB 3.1)"
            },
            "HDMI": {
                "description": "Puerto para conexión de monitores. Soporta video y audio digital de alta definición, ideal para conectar pantallas y proyectores.",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5MfJ-DNioNy5xWKcyD8Aiy6LFFLFKmiveQ&s",
                "type": "Puerto",
                "speed": "Hasta 18 Gbps (HDMI 2.0)"
            },
            "24-pin": {
                "description": "Conector principal de alimentación. Proporciona energía a la placa madre y a otros componentes esenciales del sistema, asegurando un suministro estable.",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-1huS3Qub00HggiI27gtI4MO7sPWE8-48A&s",
                "type": "Alimentación",
                "speed": "N/A"
            },
            "8-pin": {
                "description": "Conector de alimentación para la CPU. Suministra energía adicional a la unidad central de procesamiento, especialmente en sistemas de alto rendimiento.",
                "image": "https://m.media-amazon.com/images/I/617hmAIVo8L._AC_UF1000,1000_QL80_.jpg",
                "type": "Alimentación",
                "speed": "N/A"
            },
            "Chipset": {
                "description": "Controla la comunicación entre el procesador y otros componentes. Es fundamental para el rendimiento general del sistema y la compatibilidad de hardware.",
                "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDlaJa8VRKQTaOHbcwF51BnWTqhk3Eub8D46Sm6UPIQbNNjjSgcqzmfSVFiFZrFBxidE779MGuQJj2BmSBWhKyhR8PpJ8LO7Efm7U_kdxVnxhiuvGA2BgmMfT2dFyPSlqP-aWpPw6RFOU/s1600/aa.png",
                "type": "Chip",
                "speed": "N/A"
            },
            "BIOS": {
                "description": "Firmware básico que inicia el hardware. Permite la configuración del sistema y la carga del sistema operativo, actuando como un puente entre el hardware y el software.",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWeYZJTEL7Xu5GLEDZxg21d513QAR5utM6g&s",
                "type": "Chip",
                "speed": "N/A"
            }
        },
        "Ranuras": {
            "PCIe": {
                "description": "Ranura para tarjetas gráficas y otros dispositivos. Ofrece un alto ancho de banda y es esencial para el rendimiento gráfico en juegos y aplicaciones de diseño.",
                "image": "https://hardzone.es/app/uploads-hardzone.es/2019/11/Puertos-PCIe-x4-01.jpg",
                "type": "Ranura",
                "speed": "Hasta 32 GT/s"
            },
            "DIMM": {
                "description": "Ranura para módulos de memoria RAM. Permite la instalación de memoria de alto rendimiento, crucial para la multitarea y el rendimiento general del sistema.",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz9wtcsQddziE1E-Z8Vj0LFj0NPB2156TmVA&s",
                "type": "Ranura",
                "speed": "Dependiente del módulo"
            }
        },
        "Puertos": {
            "USB": {
                "description": "Puertos para dispositivos USB. Facilitan la conexión de una amplia variedad de dispositivos, desde almacenamiento externo hasta impresoras.",
                "image": "https://www.profesionalreview.com/wp-content/uploads/2020/09/C%C3%B3mo-solucionar-velocidad-usb-5.jpg",
                "type": "Puerto",
                "speed": "Hasta 10 Gbps (USB 3.1)"
            },
            "HDMI": {
                "description": "Puerto para conexión de monitores. Permite la transmisión de video y audio de alta calidad, ideal para entretenimiento y presentaciones.",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5MfJ-DNioNy5xWKcyD8Aiy6LFFLFKmiveQ&s",
                "type": "Puerto",
                "speed": "Hasta 18 Gbps (HDMI 2.0)"
            }
        },
        "Alimentación": {
            "24-pin": {
                "description": "Conector principal de alimentación. Esencial para el funcionamiento de la placa madre y otros componentes, asegurando un suministro eléctrico adecuado.",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-1huS3Qub00HggiI27gtI4MO7sPWE8-48A&s",
                "type": "Alimentación",
                "speed": "N/A"
            },
            "8-pin": {
                "description": "Conector de alimentación para la CPU. Proporciona energía adicional necesaria para el funcionamiento eficiente del procesador, especialmente en sistemas de alto rendimiento.",
                "image": "https://m.media-amazon.com/images/I/617hmAIVo8L._AC_UF1000,1000_QL80_.jpg",
                "type": "Alimentación",
                "speed": "N/A"
            }
        },
        "Chips": {
            "Chipset": {
                "description": "Controla la comunicación entre el procesador y otros componentes. Es clave para el rendimiento del sistema y la compatibilidad de hardware.",
                "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDlaJa8VRKQTaOHbcwF51BnWTqhk3Eub8D46Sm6UPIQbNNjjSgcqzmfSVFiFZrFBxidE779MGuQJj2BmSBWhKyhR8PpJ8LO7Efm7U_kdxVnxhiuvGA2BgmMfT2dFyPSlqP-aWpPw6RFOU/s1600/aa.png",
                "type": "Chip",
                "speed": "N/A"
            },
            "BIOS": {
                "description": "Firmware básico que inicia el hardware. Permite la configuración del sistema y la carga del sistema operativo, actuando como un puente entre el hardware y el software.",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWeYZJTEL7Xu5GLEDZxg21d513QAR5utM6g&s",
                "type": "Chip",
                "speed": "N/A"
            }
        }
    };

    const content = `
        <div class="techmap-container">
            <header class="header">
                <h1>TechMap</h1>
            </header>
            <div class="contenedor">
                <div class="filtors_txt">
                    Filtros
                </div>
                <p class="linea">――――</p>
                <div class="filters">
                    <button class="filter-button todos" data-filter="Todos">Todos</button>
                    <button class="filter-button ranuras" data-filter="Ranuras">Ranuras</button>
                    <button class="filter-button puertos" data-filter="Puertos">Puertos</button>
                    <button class="filter-button alimentacion" data-filter="Alimentación">Alimentación</button>
                    <button class="filter-button chips" data-filter="Chips">Chips</button>
                </div>
                <div class="plca">
                    <div class="motherboard-container">
                        <div class="buttons-overlay">
                            <div id="connectors-list"></div>
                        </div>
                        <img src="https://github.com/EduardoAjcajon/img_techMap/blob/main/plca_madre.png?raw=true" alt="Placa Madre" class="motherboard-image">
                    </div>
                </div>
            </div>
        </div>
    `;

    // Insertar contenido en el root
    root.innerHTML = content;

    const connectorsList = document.getElementById('connectors-list');

    // Función para mostrar conectores según el filtro
    const showConnectors = (filter) => {
        connectorsList.innerHTML = '';
        const selectedConnectors = connectors[filter];
        for (const [key, value] of Object.entries(selectedConnectors)) {
            const connectorDiv = document.createElement('div');
            connectorDiv.classList.add('component');

            const button = document.createElement('button');
            // Asignar clase única para cada botón
            if (key === "24-pin") {
                button.classList.add('info-button', 'veinte-cuatro');
            } else if (key === "8-pin") {
                button.classList.add('info-button', 'ochoPin');
            } else {
                button.classList.add('info-button', key.toLowerCase().replace(/\s+/g, '-'));
            }
            button.textContent = key;
            button.setAttribute('data-component', key);
            connectorDiv.appendChild(button);
            connectorsList.appendChild(connectorDiv);

            button.addEventListener('click', () => {
                modalTitle.textContent = key;

                const typeInfo = document.createElement('p');
                typeInfo.textContent = `Tipo: ${value.type}`;
                modalInfo.appendChild(typeInfo);

                const speedInfo = document.createElement('p');
                speedInfo.textContent = `Velocidad: ${value.speed}`;
                modalInfo.appendChild(speedInfo);

                const modalImage = document.createElement('img');
                modalImage.src = value.image;
                modalImage.alt = key;
                modalImage.classList.add('modal-image');

                modalInfo.innerHTML = ''; 
                modalInfo.appendChild(modalImage); 
                modalInfo.appendChild(document.createTextNode(value.description));

                modal.style.display = 'block';
            });
        }
    };

    // Mostrar conectores por defecto
    showConnectors('Todos');

    // Manejar filtros
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            showConnectors(filter);
        });
    });

    // Cerrar modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});