document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalInfo = document.getElementById('modal-info');
    const closeModal = document.getElementById('close');

    // Datos de los conectores
    const connectors = {
        "Ranuras": {
            "PCIe": {
                "description": "Ranura para tarjetas gráficas y otros dispositivos.",
                "image": "https://example.com/pci-e.jpg"
            },
            "DIMM": {
                "description": "Ranura para módulos de memoria RAM.",
                "image": "https://example.com/dimm.jpg"
            }
        },
        "Puertos": {
            "USB": {
                "description": "Puertos para dispositivos USB.",
                "image": "https://example.com/usb.jpg"
            },
            "HDMI": {
                "description": "Puerto para conexión de monitores.",
                "image": "https://example.com/hdmi.jpg"
            }
        },
        "Alimentación": {
            "24-pin": {
                "description": "Conector principal de alimentación.",
                "image": "https://example.com/24-pin.jpg"
            },
            "8-pin": {
                "description": "Conector de alimentación para la CPU.",
                "image": "https://example.com/8-pin.jpg"
            }
        },
        "Chips": {
            "Chipset": {
                "description": "Controla la comunicación entre el procesador y otros componentes.",
                "image": "https://example.com/chipset.jpg"
            },
            "BIOS": {
                "description": "Firmware básico que inicia el hardware.",
                "image": "https://example.com/bios.jpg"
            }
        }
    };

    // Generar contenido HTML
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
                    <button class="filter-button ranuras" data-filter="Ranuras">Ranuras</button>
                    <button class="filter-button puertos" data-filter="Puertos">Puertos</button>
                    <button class="filter-button alimentacion" data-filter="Alimentación">Alimentación</button>
                    <button class="filter-button chips" data-filter="Chips">Chips</button>
                </div>
                <div class="plca">
                    <div class="motherboard-container">
                        <img src="https://github.com/EduardoAjcajon/img_techMap/blob/main/plca_madre.png?raw=true" alt="Placa Madre" class="motherboard-image">
                        <div class="buttons-overlay">
                            <div id="connectors-list"></div>
                        </div>
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
            button.classList.add('info-button');
            button.textContent = key;
            button.setAttribute('data-component', key);
            connectorDiv.appendChild(button);
            connectorsList.appendChild(connectorDiv);

            // Mostrar modal con información del conector
            button.addEventListener('click', () => {
                modalTitle.textContent = key;

                // Crear y agregar la imagen al modal
                const modalImage = document.createElement('img');
                modalImage.src = value.image;
                modalImage.alt = key;
                modalImage.classList.add('modal-image');

                // Limpiar contenido anterior del modal y agregar la nueva imagen
                modalInfo.innerHTML = ''; // Limpiar contenido anterior
                modalInfo.appendChild(modalImage); // Agregar la imagen al modal
                modalInfo.appendChild(document.createTextNode(value.description)); // Agregar la descripción

                modal.style.display = 'block';
            });
        }
    };

    // Mostrar conectores por defecto
    showConnectors('Ranuras');

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
