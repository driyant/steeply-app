import React, { useRef, useState, useEffect } from "react";
import { useWindowDimensions, StyleSheet,Text,View,Animated,TouchableOpacity,Image } from "react-native";
import { Box, Center, Container, Flex, HStack, Column, VStack } from "native-base";
import Lesson from "../../components/Lesson";
import Banner from "../../components/Banner";
import styled from 'styled-components/native';
import storyImgs, { sections, slides } from "./stories/education.stories";
import {purple, lilac, gray} from '../../helpers/colors';

const PurpleView=styled(VStack)`
    background-color: ${lilac};
    color: ${purple}; 
    height:100%;
`

const EducationScreen = (props) => {

    let  dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    let styles = educationStyles(dimenWidth,dimenHeight);

    let circleInfo = {
        bg:"white",
        header:"Education",
        headerIcon:null
    }
    //calls once on first component render
    useEffect(() => {

    }, []);

    return (
        <PurpleView w="100%" h="100%">
          <Banner banners={slides} header="Navigating School" headerIcon={require("../../images/education.png")} fontColor={purple} circleBg={gray} titleOffset={60} {...props}/>
          <Lesson lessonSections={sections} storyImgs={storyImgs}>
          </Lesson>   
        </PurpleView>
    );

};


const educationStyles = (width, height) => StyleSheet.create({

    /*Containers */
    container1: {
        backgroundColor: "white",
        width: width,
        height: height,
        alignItems: "flex-end"
    }
});

export default EducationScreen;