import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { string } from "prop-types";
import { func } from "prop-types";

export default function Button(props) {
    const { label, onPress } = props;
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
    );
}

Button.propTypes = {
    label: string.isRequired,
    onPress: func,
};

Button.defaultProps = {
    onPress: null,
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#2DD9FF',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    buttonLabel: {
        fontSize: 16,
        lineHeight: 32,
        paddingVertical: 8,
        paddingHorizontal: 32,
        color: '#ffffff',
    },
});
