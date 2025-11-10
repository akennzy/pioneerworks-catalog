// src/lib/pdfGenerator.js
import jsPDF from 'jspdf'

export const generatePDF = (ship) => {
  const doc = new jsPDF()
  doc.setFont('helvetica')
  doc.setFontSize(20)
  doc.text(ship.name, 20, 30)
  doc.setFontSize(12)
  doc.text(`Código: ${ship.code}`, 20, 50)
  let y = 70
  ship.specs.forEach((s) => {
    doc.text(`${s.label}: ${s.value}`, 20, y)
    y += 10
  })
  doc.save(`${ship.code}.pdf`)
}