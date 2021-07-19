import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import theme from '../Utils/Theme';

export default function Tag(props) {

    function getTagTypeStyle(type) {

        let cardTypeStyle = {
            backgroundColor: theme.background,
        }

        if (type === 'primery') {
            cardTypeStyle = {
                backgroundColor: theme.primery,
            }
        } else if (type === 'info') {
            cardTypeStyle = {
                backgroundColor: theme.info,
            }

        } else if (type === 'danger') {
            cardTypeStyle = {
                backgroundColor: theme.danger,
            }
        }

        return cardTypeStyle
    }


    return <View style={[styles.tagMainWrapper, getTagTypeStyle(props.type)]}><Text style={styles.textStyle}>{props.label}</Text></View>

}

const styles = StyleSheet.create({
    tagMainWrapper: {
        backgroundColor: theme.background,
        borderRadius: 4,
        flex: 1,
    },
    textStyle: {
        color: "#000000"
    }

})