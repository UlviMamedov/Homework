import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

export default function HomeScreen() {
    return (
        <View style={{
            width: '100%'
        }}>
            <View style={{
                width: '100%',
                alignItems: 'center'
            }}>
            <View style={styles.photo}>
                <View style={{
                    width: '150px',
                    height: '110px',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image 
                        style={styles.productImage}
                        source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjWMzSYorIgi_U9JKqTiNu9MNsAW32qTzDW4-VLwqVvLkoOZvWQusLt3Ytji-P66DQXo&usqp=CAU'
                    }}>
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
                        <Text style={styles.longTitle} numberOfLines={1}>
                            This product is very good
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
            <View style={{
                width: '100%',
                alignItems: 'center'
            }}>
                <View style={styles.photo}>
                    <View style={{
                        width: '150px',
                        height: '110px',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image 
                            style={styles.productImage}
                            source={{
                            uri: 'https://www.patagonia.ca/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw1b954d36/images/hi-res/50655_GRBN.jpg?sw=768&sh=768&sfrm=png&q=95&bgcolor=f5f5f5'
                        }}>
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
    photo: {
        // flex: 1,
        alignItems: 'center',
        width: '90%',
        height: '140px',
        borderRadius: '15px',
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        marginTop: 20
        // flexDirection: 'row'
    },
    productImage: {
        width: '90px',
        height: '90px',
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
        backgroundColor: '#a0a0a0'
    },
    content: {
        width: '234px',
        height: '100px',
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
        width: '30px',
        height: '30px'
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
        width: '20px',
        height: '20px',
        marginRight: 25
    }
})