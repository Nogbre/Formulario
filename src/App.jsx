import { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import FormularioPDF from './FormularioPDF';

// Datos de prueba — cámbialos al vuelo y verás la actualización
const dummy = {
  unidadSolicitante: 'DEPARTAMENTO ACAD. INGENIERIA MECANICA Y AUTUMATIZACION INDUSTRIAL',
  fecha: '2025-05-11',
  centroCosto: 'CC-123',
  responsable: 'Ing. Pérez',
  codigoInversion: 'INV-007',
  justificacion: 'Reposición de reactivos agotados',
  observaciones: 'Prioridad alta',
  items: [
    { cantidad: 3, unidad: 'Kg', descripcion: 'NaCl', pu: 50, total: 150 },
    { cantidad: 2, unidad: 'L',  descripcion: 'Etanol 96°', pu: 80, total: 160 },
  ],
  valorTotal: 310,
  valorLiteral: 'Trescientos diez 00/100',
};

export default function App() {
  const [data] = useState(dummy);  // aquí podrías tener un formulario

  return (
    <div style={{ height: '100vh' }}>
      <PDFViewer style={{ width: '80vw', height: '90vh' }}>
        <FormularioPDF data={data} />
      </PDFViewer>
    </div>
  );  
}
