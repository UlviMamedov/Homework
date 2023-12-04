import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.mainBlock}>`
            <View style={styles.main}>
            <View style={styles.photo}>
                <View style={styles.mainPhoto}>
                    <Image 
                        style={styles.productImage}
                        source={
                            require('~/assets/images/product_photo.png')
                        }>
                    </Image>
                    <View style={styles.newTag}>
                        <Text style={{
                            fontSize: 9,
                            textTransform: 'uppercase'
                        }}>New</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.text}>
                        <Text style={styles.productName}>
                            Sweater 1
                        </Text>
                        <Image style={styles.likeProduct} source={
                            require('~/assets/images/heart-image.png')
                        }>
                        </Image>
                    </View>
                    <View style={styles.price}>
                        <Text style={styles.newPrice}>
                            New Price
                        </Text>
                        <Text style={styles.oldPrice}>
                            Old Price
                        </Text>
                    </View>
                    <View style={styles.end}>
                        <Text style={styles.longTitle} numberOfLines={1}>
                            This product is very good
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Text style={styles.buyProduct}>
                                Buy
                            </Text>
                            <Image style={styles.buyImage} source={
                                require('~/assets/images/buy.png')
                            }>
                                
                            </Image>
                        </View>
                    </View>
                </View>
            </View>
            </View>
            <View style={styles.main}>
                <View style={styles.photo}>
                    <View style={styles.mainPhoto}>
                        <Image 
                            style={styles.productImage}
                            source={
                                require('~/assets/images/product_photo_2.png')
                            }>
                        </Image>
                        <View style={styles.newTag}>
                            <Text style={{
                                fontSize: 9,
                                textTransform: 'uppercase'
                            }}>New</Text>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.text}>
                            <Text style={styles.productName}>
                                Sweater 2
                            </Text>
                            <Image style={styles.likeProduct} source={{
                                uri: 'https://lms.ithillel.ua/uploads/images/2684e2280f5c8f1be44a5add6ef03a9e.png'
                            }}>
                            </Image>
                        </View>
                        <View style={styles.price}>
                            <Text style={styles.newPrice}>
                                New Price
                            </Text>
                            <Text style={styles.oldPrice}>
                                Old Price
                            </Text>
                        </View>
                        <View style={styles.end}>
                            <Text style={styles.longTitle}  numberOfLines={1}>
                                This product is very good.
                            </Text>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <Text style={styles.buyProduct}>
                                    Buy
                                </Text>
                                <Image style={styles.buyImage} source={{
                                    uri: 'https://lms.ithillel.ua/uploads/images/8f09cf7cc7a81733bf96e2c1e63b71f7.png'
                                }}>
                                    
                                </Image>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainBlock: {
        width: '100%'
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
        borderColor: 'gray',
        flexDirection: 'row',
        marginTop: 20,
        shadowColor: '#000',
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
        borderColor: 'gray',
        resizeMode: 'contain',
        position: 'relative'
    },
    newTag: {
        position: 'absolute',
        top: -3,
        right: 12,
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 25, 
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'gray',
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
    }
})