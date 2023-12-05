import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    Modal,
    Alert,
    Pressable,
    ScrollView
} from 'react-native';

const product = [
    {
        name: 'Sweater 1',
        productImage: require('~/assets/images/sweater.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Shoes',
        productImage: require('~/assets/images/shoes.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Sneaker',
        productImage: require('~/assets/images/sneaker.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Sweater 2',
        productImage: require('~/assets/images/sweater_2.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Sneaker 2',
        productImage: require('~/assets/images/sneaker_2.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Trouser',
        productImage: require('~/assets/images/trouser.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Trouser 2',
        productImage: require('~/assets/images/trouser_2.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Hat',
        productImage: require('~/assets/images/hat.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Sweater 3',
        productImage: require('~/assets/images/sweater_3.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Shoes 2',
        productImage: require('~/assets/images/shoes_2.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
]

const colors = {
    gray: 'gray',
    black: '#000',
    white: 'white',
    red: 'red',
    lightGray: '#C8C8C8'
}


export default function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [searchProduct, setSearchProduct] = useState('');

    const filterProduct = product.filter(item => {
        return item.name.toLowerCase().includes(searchProduct.toLowerCase())
    })

    return (
        <ScrollView style={styles.mainBlock}>
            <View style={styles.centeredView}>
                <View style={styles.inputBlock}>
                    <TextInput
                        style={styles.inputText}
                        placeholder='Search...'
                        onChangeText={(text) => setSearchProduct(text)}
                        value={searchProduct}/>
                    <Pressable
                        style={[styles.button]}
                        onPress={() => setModalVisible(true)}>
                        <Image style={styles.inputBlockLikeProduct} source={
                            require('~/assets/images/heart-image.png')
                        }>
                        </Image>
                    </Pressable>
                    <Image style={styles.inputSearchImage} source={
                        require('~/assets/images/search.png')
                    }/>
                </View>
            </View>
            {filterProduct.map((product, index) => {
                return (
                    <View style={styles.main} key={index}>
                        <View style={styles.photo}>
                            <View style={styles.mainPhoto}>
                                <Image
                                    style={styles.productImage}
                                    source={
                                        product.productImage
                                    }>
                                </Image>
                                <View style={styles.newTag}>
                                    <Text style={{
                                        fontSize: 9,
                                        textTransform: 'uppercase'
                                    }}>{product.newTagText}</Text>
                                </View>
                            </View>
                            <View style={styles.content}>
                                <View style={styles.text}>
                                    <Text style={styles.productName}>
                                        {product.name}
                                    </Text>
                                    <Image style={styles.likeProduct} source={
                                        product.likeImage
                                    }>
                                    </Image>
                                </View>
                                <View style={styles.price}>
                                    <Text style={styles.newPrice}>
                                        {product.newPrice}
                                    </Text>
                                    <Text style={styles.oldPrice}>
                                        {product.oldPrice}
                                    </Text>
                                </View>
                                <View style={styles.end}>
                                    <Text style={styles.longTitle} numberOfLines={1}>
                                        {product.longTitle}
                                    </Text>
                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <Text style={styles.buyProduct}>
                                            {product.buyText}
                                        </Text>
                                        <Image style={styles.buyImage} source={
                                            product.buyImage
                                        }>

                                        </Image>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })}
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Close Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainBlock: {
        width: '100%',
    },
    mainPhoto: {
        width: 150,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center'
    },
    photo: {
        // flex: 1,
        alignItems: 'center',
        width: '90%',
        height: 140,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.gray,
        flexDirection: 'row',
        marginTop: 20,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        // flexDirection: 'row'
    },
    main: {
        width: '100%',
        alignItems: 'center'
    },
    productImage: {
        width: 90,
        height: 90,
        borderWidth: 1,
        borderColor: colors.gray,
        resizeMode: 'contain',
        position: 'relative'
    },
    newTag: {
        position: 'absolute',
        top: -3,
        right: 12,
        width: 30,
        height: 30,
        backgroundColor: colors.white,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.gray,
        borderWidth: '1px',
    },
    content: {
        width: 234,
        height: 100,
        justifyContent: 'space-between'
    },
    text: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
    },
    productName: {
        fontSize: 17
    },
    likeProduct: {
        width: 30,
        height: 30
    },
    price: {
        width: '100%',
        flexDirection: 'row'
    },
    newPrice: {
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 18
    },
    oldPrice: {
        fontSize: 17,
        textDecorationLine: 'line-through',
        marginLeft: 20
    },
    end: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'hidden'
    },
    longTitle: {
        width: 140,
        fontSize: 17,
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    },
    buyProduct: {
        fontSize: 17,
        marginRight: 3
    },
    buyImage: {
        width: 20,
        height: 20,
        marginRight: 25
    },
    inputBlock: {
        width: '100%',
        height: 70,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputText: {
        width: 290,
        height: 35,
        color: colors.red,
        borderWidth: 1,
        borderColor: colors.gray,
        backgroundColor: colors.lightGray,
        marginLeft: 22,
        paddingLeft: 25,
        borderRadius: 5,
    },
    inputBlockLikeProduct: {
        width: 30,
        height: 30,
        marginLeft: 10
    },
    inputSearchImage: {
        width: 23,
        height: 23,
        marginLeft: 10
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,
    },
    modalContent: {
        width: '100%',
        height: 350,
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 35,
        alignItems: 'center',
        justifyContent: 'flex-end',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    textStyle: {
        color: colors.black,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 70,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    }
})
