import React, { Component } from 'react';
import { ScrollView,image,Button } from 'react-native';
import Bananas from './Bananas';
import Blink from './Blink';
import LotsOfStyles from './LotsOfStyles';
import FixedDimensionsBasics from './FixedDimensionsBasics';
import FlexDirectionBasics from './FlexDirectionBasics';
import PizzaTranslator from './PizzaTranslator';
import FlatListBasics from './FlatListBasics';
import FetchExample from './FetchExample';




class Maintext extends Component {
  render() {
      return (
          <ScrollView>
              
              <Bananas image source = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' />
            
              <Blink />
              <LotsOfStyles />
              <FixedDimensionsBasics />
              <FlexDirectionBasics/>
               <PizzaTranslator/>
               <Button
                      onPress={() => {
                       Alert.alert('You tapped the button!');
                 }}
              title="Press Me"
                />
                <FlatListBasics />
                <FetchExample />


          </ScrollView>
      );
  }
}
export default Maintext;