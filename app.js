import { result } from "lodash";
import { type } from "os";
import React from "react";
import { Button, ImagePickerIOS, Platform } from "react-native";
import PickImage from "./img_pred";

export default class App extends React.Component{
    render(){
        return <PickImage/>;
    }
} 

render(){
    let  {image}  = this.state;
    return(
        <View style={{flex:1, alignItems: "center", justiftContent: "center"}}>
            <Button
                title="Pick an image from camera roll"
                onPress={this._pickImage}
            />
        </View>
    );
};

data.append("digit", fileToUpload);
fetch("https://07afd951a187.ngrok.io/predict-digit", {
    method: "POST",
    body: data,
    headers: {
        "content-type": "multipart/form-data",
    },
})