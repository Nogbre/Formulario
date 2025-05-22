import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import background from './assets/solicitud-vacia.jpg';

const styles = StyleSheet.create({
    page: {
        position: 'relative',
    },
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 595,
        height: 842,
    },
    textOverlay: {
        position: 'absolute',
        top: 100,
        left: 100,
        fontSize: 24,
        color: 'black',
        padding: 5,
        border: '1px solid red',
        marginTop: 20,
        marginLeft: -28,
        width: 475,
        paddingBottom: 0,
    },
    texto1: {
        fontSize: 8,
        color: 'black',
        paddingTop: 4,
        paddingBottom: 4,
        border: '1px solid red',
        marginTop: 95,
        width: 245,
        marginLeft: 102,
    },
    texto2: {
        fontSize: 8,
        color: 'black',
        paddingTop: 4,
        paddingBottom: 4,
        border: '1px solid red',
        width: 245,
        marginLeft: 102,
    },
    texto3: {
        fontSize: 8,
        color: 'black',
        paddingTop: 4,
        paddingBottom: 4,
        border: '1px solid red',
        width: 245,
        marginLeft: 102,
    },

    textOverlay2: {
        position: 'absolute',
        fontSize: 24,
        color: 'black',
        padding: 2,
        border: '1px solid red',
        width: 133,
        paddingBottom: 0,
        marginTop: 280,
        display: 'flex',
        flexDirection: 'row',
        
        marginLeft: 178,
    },

    texto4: {
        fontSize: 8,
        color: 'black',
        paddingTop: 4,
        paddingBottom: 2,
        border: '1px solid red',
        width: 45,
    },
    texto5: {
        fontSize: 8,
        color: 'black',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 5,
        border: '1px solid red',
        width: 100,
    },
    texto6: {
        fontSize: 8,
        color: 'black',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 5,
        border: '1px solid red',
        width: 100,
    },

    Insumo1: {
        position: 'absolute',
        fontSize: 10,
        color: 'black',
        padding: 2,
        border: '1px solid red',
        width: 474,
        paddingBottom: 0,
        marginTop: 385,
        display: 'flex',
        flexDirection: 'row',
        
        marginLeft:70,
    },

    cant1: {
        fontSize: 9,
        color: 'black',
        padding: 2,
        border: '1px solid red',
        width: 90,
    },

    unidad1: {
        fontSize: 9,
        color: 'black',
        padding: 2,
        border: '1px solid red',
        width: 130,
    },

    descripcion1: {
        fontSize: 9,
        color: 'black',
        padding: 2,
        border: '1px solid red',
        width: 470,
    },

    pu1: {
        fontSize: 9,
        color: 'black',
        padding: 2,
        border: '1px solid red',
        width: 100,
    },

    total1: {
        fontSize: 9,
        color: 'black',
        padding: 2,
        border: '1px solid red',
        width: 100,
        display: 'flex',
        justifyContent: 'flex-end', 
    },

    Insumo2: {
        position: 'absolute',
        fontSize: 10,
        color: 'black',
        padding: 2,
        border: '1px solid red',
        width: 474,
        paddingBottom: 0,
        marginTop: 415,
        display: 'flex',
        flexDirection: 'row',
        
        marginLeft:70,
    },

    Insumo3: {
        position: 'absolute',
        fontSize: 10,
        color: 'black',
        padding: 2,
        border: '1px solid red',
        width: 474,
        paddingBottom: 0,
        marginTop: 450,
        display: 'flex',
        flexDirection: 'row',
        
        marginLeft:70,
    },

    Insumo4: {
        position: 'absolute',
        fontSize: 10,
        color: 'black',
        padding: 2,
        border: '1px solid red',
        width: 474,
        paddingBottom: 0,
        marginTop: 485,
        display: 'flex',
        flexDirection: 'row',
        
        marginLeft:70,
    },

    Insumo5: {
        position: 'absolute',
        fontSize: 10,
        color: 'black',
        padding: 2,
        border: '1px solid red',
        width: 474,
        paddingBottom: 0,
        marginTop: 512,
        display: 'flex',
        flexDirection: 'row',
        
        marginLeft:70,
    },

    Insumo6: {
        position: 'absolute',
        fontSize: 10,
        color: 'black',
        padding: 2,
        border: '1px solid red',
        width: 474,
        paddingBottom: 0,
        marginTop: 538,
        display: 'flex',
        flexDirection: 'row',
        
        marginLeft:70,
    },

    Insumo7: {
        position: 'absolute',
        fontSize: 10,
        color: 'black',
        padding: 2,
        border: '1px solid red',
        width: 474,
        paddingBottom: 0,
        marginTop: 574,
        display: 'flex',
        flexDirection: 'row',
        
        marginLeft:70,
    },
});

export default function FormularioPDF() {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    <Image style={styles.backgroundImage} src={background} />
                    <View style={styles.textOverlay}>
                        <Text style={styles.texto1}>Centro de Costo</Text>
                        <Text style={styles.texto2}>Resonsable</Text>
                        <Text style={styles.texto3}>Nro de blabla</Text>
                    </View>
                </View>

                <View style={styles.textOverlay2}>
                    <Text style={styles.texto4}>15</Text>
                    <Text style={styles.texto5}>marzo</Text>
                    <Text style={styles.texto6}>2004</Text>
                </View>

                <View style={styles.Insumo1}>
                    <Text style={styles.cant1}>15</Text>
                    <Text style={styles.unidad1}>marzo</Text>
                    <Text style={styles.descripcion1}>insumo que se encuneasjajsnfajsnfka asjfnaksjfnajksnfjkasfkajbnsfkjaskfbaskfbaksfbaksbfkajbsfkjab</Text>
                    <Text style={styles.pu1}>2004</Text>
                    <Text style={styles.total1}>2004</Text>
                </View>

                <View style={styles.Insumo2}>
                    <Text style={styles.cant1}>15</Text>
                    <Text style={styles.unidad1}>marzo</Text>
                    <Text style={styles.descripcion1}>insumo que se encuneasjajsnfajsnfka asjfnaksjfnajksnfjkasfkajbnsfkjaskfbaskfbaksfbaksbfkajbsfkjab</Text>
                    <Text style={styles.pu1}>2004</Text>
                    <Text style={styles.total1}>2004</Text>

                </View>

                <View style={styles.Insumo3}>
                    <Text style={styles.cant1}>15</Text>
                    <Text style={styles.unidad1}>marzo</Text>
                    <Text style={styles.descripcion1}>insumo que se encuneasjajsnfajsnfka asjfnaksjfnajksnfjkasfkajbnsfkjaskfbaskfbaksfbaksbfkajbsfkjab</Text>
                    <Text style={styles.pu1}>2004</Text>
                    <Text style={styles.total1}>2004</Text>

                </View>

                <View style={styles.Insumo4}>
                    <Text style={styles.cant1}>15</Text>
                    <Text style={styles.unidad1}>marzo</Text>
                    <Text style={styles.descripcion1}>insumo que se encuneasjajsnfajsnfka asjfnaksjfnajksnfjkasfkajbnsfkjaskfbaskfbaksfbaksbfkajbsfkjab</Text>
                    <Text style={styles.pu1}>2004</Text>
                    <Text style={styles.total1}>2004</Text>

                </View>
                
                <View style={styles.Insumo5}>
                    <Text style={styles.cant1}>15</Text>
                    <Text style={styles.unidad1}>marzo</Text>
                    <Text style={styles.descripcion1}>insumo que se encuneasjajsnfajsnfka asjfnaksjfnajksnfjkasfkajbnsfkjaskfbaskfbaksfbaksbfkajbsfkjab</Text>
                    <Text style={styles.pu1}>2004</Text>
                    <Text style={styles.total1}>2004</Text>

                </View>

                <View style={styles.Insumo6}>
                    <Text style={styles.cant1}>15</Text>
                    <Text style={styles.unidad1}>marzo</Text>
                    <Text style={styles.descripcion1}>insumo que se encuneasjajsnfajsnfka asjfnaksjfnajksnfjkasfkajbnsfkjaskfbaskfbaksfbaksbfkajbsfkjab</Text>
                    <Text style={styles.pu1}>2004</Text>
                    <Text style={styles.total1}>2004</Text>

                </View>

                <View style={styles.Insumo7}>
                    <Text style={styles.cant1}>15</Text>
                    <Text style={styles.unidad1}>marzo</Text>
                    <Text style={styles.descripcion1}>insumo que se encuneasjajsnfajsnfka asjfnaksjfnajksnfjkasfkajbnsfkjaskfbaskfbaksfbaksbfkajbsfkjab</Text>
                    <Text style={styles.pu1}>2004</Text>
                    <Text style={styles.total1}>2004</Text>

                </View>

            </Page>
        </Document>
    );
}