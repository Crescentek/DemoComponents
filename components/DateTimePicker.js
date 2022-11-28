import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import normalize from './normalize';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
import { createVariant, useRestyle, useTheme } from "@shopify/restyle";
export default function DateTimePicker(props) {

  const theme = useTheme();
    const { black, white, red } = theme.colors;
    const { value, mode, minDate, maxDate, dateTimePickerVisible, labelText, isDatePicker } = props;

  function onDateChange(val) {
    if (props.onDateChange) {
      props.onDateChange(val);
    }
  }

  function onPressCancel() {
    if (props.onPressCancel) {
      props.onPressCancel();
    }
  }

  function onPressDone(val) {
    if (props.onPressDone) {
      props.onPressDone(val);
    }
  }

  function onBackdropPress() {
    if (props.onBackdropPress) {
      props.onBackdropPress();
    }
  }

  return (
    <Modal
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating={true}
      isVisible={dateTimePickerVisible}
      style={{width: '100%', alignSelf: 'center', margin: 0}}
      animationInTiming={800}
      animationOutTiming={1000}
      onBackdropPress={() => onBackdropPress()}>
      <View
        style={{
          flex: 1,
          backgroundColor: black,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          backgroundColor: black,
          borderTopRightRadius: normalize(15),
          borderTopLeftRadius: normalize(15),
          paddingBottom: normalize(15),
          alignItems: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            paddingHorizontal: normalize(30),
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: normalize(10),
          }}>
          <Text
            style={{
              fontSize: normalize(15),
            }}>
            {labelText}
          </Text>
          <TouchableOpacity
            onPress={() => {
              
              onPressDone(value);
            }}>
            <Text
              style={{
                fontSize: normalize(16),
                color: white,
                marginTop: normalize(10),
              }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
        {isDatePicker ? (
          <DatePicker
          textColor={white}
            date={value}
            minuteInterval={15}
            onDateChange={val => {
              onDateChange(val);
            }}
            onConfirm={(val) => {
              onPressDone(val)
            }}
            androidVariant="iosClone"
            style={{
              width: Dimensions.get('screen').width,
              backgroundColor: black,
              
            }}
            mode={mode}
            minimumDate={minDate}
            maximumDate={maxDate}
          />
        ) : (
          <DatePicker
          textColor={white}
            date={value}
            onDateChange={val => {
              onDateChange(val);
            }}
            onConfirm={(val) => {
              onPressDone(val)
            }}
            minimumDate={minDate}
            maximumDate={maxDate}
            androidVariant="iosClone"
            style={{
              width: Dimensions.get('screen').width,
              backgroundColor: black,
            }}
            mode={mode}
          />
        )}
      </View>
    </Modal>
  );
}

DateTimePicker.propTypes = {
  dateTimePickerVisible: PropTypes.bool,
  selectedDate: PropTypes.any,
  maxDate: PropTypes.any,
  minDate: PropTypes.any,
  onDateChange: PropTypes.func,
  format: PropTypes.string,
  onPressDone: PropTypes.func,
  onPressCancel: PropTypes.func,
  mode: PropTypes.string,
  value: PropTypes.any,
  onBackdropPress: PropTypes.func,
  isDatePicker: PropTypes.bool,
  labelText: PropTypes.string,
};

DateTimePicker.defaultProps = {
  dateTimePickerVisible: true,
  width: '85%',
  maxDate: new Date(),
  minDate: new Date(),
  onDateChange: null,
  format: 'DD-MM-YYYY',
  mode: 'date',
  value: '',
  onBackdropPress: null,
  isDatePicker: true,
  labelText: '',
};
