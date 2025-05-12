
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
} from '@react-pdf/renderer';

const logoSrc = 'https://th.bing.com/th/id/OIP.ZeLiHYRsdGEpRwkej2ijWQAAAA?cb=iwc1&rs=1&pid=ImgDetMain';


const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontSize: 10,
        fontFamily: 'Helvetica',
        
    },
    innerBox: {
        border: '2px solid black',
        padding: 15,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        display:'flex',
    },
    logo: {
        width: 120, // como tu clase "w-32"
        height: 40,
        objectFit: 'contain',
        marginRight:-40
    },
    headerText: {
        flex: 1,
        textAlign: 'left',
    },



    title: { 
        fontSize: 9, 
        fontWeight: 'bold',
        position:'relative',
        marginTop: -37, 
        marginLeft:-13, 
        fontStyle:'italic',
        paddingTop:3
    },
    
    subtitle: {
        fontSize: 9,
        fontWeight: 'bold',
        border: '1px solid black',
        paddingVertical: 0,
        paddingHorizontal: 190,
        alignSelf: 'flex-start',
        paddingLeft:5,
        marginLeft:-17,
        paddingTop:3,

    },
    version: {
        fontSize: 9,   
        border: '1px solid black',
        paddingVertical: 0,
        paddingHorizontal: 4,
        alignSelf: 'flex-start',
        marginLeft:-5,
        paddingTop:3,

    },

    universidad: {
        flexDirection: 'row',   // ← clave
        gap: 4,                 // opcional: espacio entre los dos bloques
        alignItems: 'baseline', // alinea texto en la misma línea base
      },

    section: { 
        marginVertical: 6,
        border: '1px solid black',
        marginLeft:-17,
        marginRight:-17
    },

    bienes:{
        backgroundColor: '#FFCC99',
        textAlign:'center',
        fontSize: 13,
        fontWeight: 'bold',  
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        borderRight: '2px solid black',
        borderLeft: '2px solid black',
        paddingTop:4,
        width:555,
        marginTop:-2,
        marginLeft:-1,
        
    },

    row2: { 
        marginLeft:0,
        flexDirection: 'row',
        marginTop:-1,
        border: '1px solid black',
    },

    label1: { 
        backgroundColor: '#FFCC99',
        width: 200,  
        fontWeight: 'bold', 
        padding:0,
        paddingLeft:3,
        paddingTop:10,


    },

    label2: { 
        backgroundColor: '#FFCC99',
        
        width: 270, 
        fontWeight: 'bold', 
        padding:0,
        paddingLeft:4,
        paddingTop:4,

    },

    label3: { 
        backgroundColor: '#FFCC99',
        
        width: 298,
        fontWeight: 'bold', 
        padding:0,
        paddingLeft:4,
        paddingTop:4,
    },

    label4: { 
        backgroundColor: '#FFCC99',
        
        width: 266,
        fontWeight: 'bold', 
        padding:0,
        textAlign:'center',
        paddingLeft:6,
        paddingTop:2,
    },

    label5: { 
        fontSize:9,
        borderTop: '2px solid black',
        width: 146,
        fontWeight: 'bold', 
        padding:0,
        textAlign:'center',
        paddingLeft:4,
        paddingTop:2,
        marginTop:-1,
    },

    value1: { 
        borderLeft: '1px solid black',
        width: 360, 
        paddingLeft: 2,
        paddingLeft:4,
        fontStyle: 'italic',
        paddingTop:2,


    },

    value2: { 
        borderLeft: '1px solid black',
        width: 485, 
        paddingLeft: 2,
    },

    value3: { 
        borderLeft: '1px solid black',
        width: 534, 
        paddingLeft: 2,
    },

    value4: { 
        borderLeft: '1px solid black',
        width: 476, 
        paddingLeft: 2,
    },

    novacio:{
        backgroundColor: '#FFCC99',
        textAlign:'center',
        borderLeft: '1px solid black',
        borderRight: '2px solid black',
        width:221,
        paddingTop:10,
        marginRight:-1,
    },
    

    vacio2:{
        borderLeft: '1px solid black',
        width:296,
    },

    vacio3:{
        borderLeft: '1px solid black',
        width:326,
    },

    vacio4:{
        borderLeft: '1px solid black',
        width:290,
    },

    vacio5:{
        borderTop:'2px solid black',
        borderLeft: '2px solid black',
        width:295,
        marginTop:-1,

    },

    exotico:{
        borderTop:'2px solid black',
        borderLeft:'2px solid black',
        width:41,
        height:23,
        marginTop:-1,
    },

    blockTitle: {
        backgroundColor: '#fbe7c6',
        fontWeight: 'bold',
        padding: 3,
        marginTop: 10,
        textTransform: 'uppercase',
    },

    justificationBox: {

        border: '1px solid black',
        minHeight: 40,
        padding: 4,
    },

    table: { display: 'table', width: 'auto', marginTop: 10 },
    tableRow: { flexDirection: 'row' },
    tableHeader: {
        backgroundColor: '#e0e0e0',
        fontWeight: 'bold',
    },
    cell: {
        border: '1px solid black',
        padding: 4,
        width: '10%',
        textAlign: 'center',
    },
    cellDesc: {
        border: '1px solid black',
        padding: 4,
        width: '40%',
    },
    totalContainer: { marginTop: 10 },
    observationsBox: {
        border: '1px solid black',
        minHeight: 30,
        padding: 4,
    },
    signatures: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    signatureBox: {
        width: '30%',
        borderTop: '1px solid black',
        textAlign: 'center',
        paddingTop: 4,
        fontSize: 9,
    },
    footer: { fontSize: 8, marginTop: 30, textAlign: 'right' },
});

export default function FormularioPDF({ data }) {
    const {
        unidadSolicitante = '',
        fecha = '',
        centroCosto = '',
        responsable = '',
        codigoInversion = '',
        justificacion = '',
        observaciones = '',
        items = [],
        valorTotal = '',
        valorLiteral = '',
    } = data;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.innerBox}>
                    {/* Encabezado con logo a la derecha */}
                    <View style={styles.headerContainer}>
                        <View style={styles.headerText}>
                            <Text style={styles.title}>Universidad Privada del Valle</Text>
                            <View style={styles.universidad}>
                                <Text style={styles.subtitle}>Codigo: RE-10-DIR-007</Text>
                                <Text style={styles.version}>Version 2.0</Text>
                            </View>
                        </View>
                        <Image style={styles.logo} src={logoSrc} />
                    </View>

                    {/* Datos básicos */}
                    <View style={styles.section}>
                        <View style={styles.row}>
                            <Text style={styles.bienes}>SOLICITUD DE PEDIDO DE ADQUISION DE BIENES Y SERVICIOS</Text>
                        </View>
                        <View style={styles.row2}>
                            <Text style={styles.label1}>Unidad Solicitante:</Text>
                            <Text style={styles.value1}>{unidadSolicitante}</Text>
                            <Text style={styles.novacio}>Nro. Solicitud a ser Registrado:</Text>
                        </View>
                        <View style={styles.row2}>
                            <Text style={styles.label2}>Centro de Costo:</Text>
                            <Text style={styles.value2}></Text>
                            <Text style={styles.vacio2}></Text>
                        </View>
                        <View style={styles.row2}>
                            <Text style={styles.label3}>Responsable:</Text>
                            <Text style={styles.value3}></Text>
                            <Text style={styles.vacio3}></Text>
                        </View>
                        <View style={styles.row2}>
                            <Text style={styles.label4}>Nro. Codigo de Inversion (Activos)</Text>
                            <Text style={styles.value4}></Text>
                            <Text style={styles.vacio4}></Text>
                        </View>

                        <View style={styles.row2}>
                            <Text style={styles.label5}>FECHA EMISION DEL PEDIDO</Text>
                            <Text style={styles.exotico}></Text>
                            <Text style={styles.exotico}></Text>
                            <Text style={styles.exotico}></Text>
                            <Text style={styles.vacio5}></Text>
                        </View>
                    </View>

                    {/* Justificación */}
                    <Text style={styles.blockTitle}>
                        Destino y justificación de la solicitud efectuada
                    </Text>
                    <View style={styles.justificationBox}>
                        <Text>{justificacion}</Text>
                    </View>

                    {/* Tabla de ítems */}
                    <View style={styles.table}>
                        <View style={[styles.tableRow, styles.tableHeader]}>
                            <Text style={styles.cell}>CANT.</Text>
                            <Text style={styles.cell}>UNIDAD</Text>
                            <Text style={styles.cellDesc}>DESCRIPCIÓN</Text>
                            <Text style={styles.cell}>P/U</Text>
                            <Text style={styles.cell}>TOTAL</Text>
                        </View>
                        {items.map((item, i) => (
                            <View style={styles.tableRow} key={i}>
                                <Text style={styles.cell}>{item.cantidad}</Text>
                                <Text style={styles.cell}>{item.unidad}</Text>
                                <Text style={styles.cellDesc}>{item.descripcion}</Text>
                                <Text style={styles.cell}>{item.pu}</Text>
                                <Text style={styles.cell}>{item.total}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Totales */}
                    <View style={styles.totalContainer}>
                        <Text style={{ fontWeight: 'bold' }}>VALOR TOTAL: {valorTotal}</Text>
                        <Text>Literal: {valorLiteral}</Text>
                    </View>

                    {/* Observaciones */}
                    <Text style={styles.blockTitle}>OBSERVACIONES</Text>
                    <View style={styles.observationsBox}>
                        <Text>{observaciones}</Text>
                    </View>

                    {/* Firmas */}
                    <View style={styles.signatures}>
                        <Text style={styles.signatureBox}>Responsable Unidad Solicitante</Text>
                        <Text style={styles.signatureBox}>Almacenes / Presupuestos</Text>
                        <Text style={styles.signatureBox}>Rector / Vicerrector</Text>
                    </View>

                    {/* Pie de página */}
                    <Text style={styles.footer}>Código: RE-10-DIR-007 Versión 2.0</Text>
                </View>
            </Page>
        </Document>
    );

    
}
