'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  PickerIOS,
  View
} from 'react-native';

let formatDate = (date) => {
  return (date.getMonth() + 1) + '月' + date.getDate() + '日';
}

let calculateDate = (date, day) => {
  date.setDate(date.getDate() + day);
  return formatDate(date);
}

export default class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: formatDate(new Date()),
      endDate: calculateDate(new Date(), 24),
      selectedDay: '24',
      picked: false,
    };
  }

  render() {
    let days = [];
    for (let i=1; i<=30; i++) {
      days.push(i + '');
    }
    return (
      <View style={{flex: 1, backgroundColor: '#F0F0F0'}}>
        <View style={styles.tab}>
          <View style={styles.dateView}>
            <Text style={styles.dateText}>{this.state.startDate}-{this.state.endDate}截止</Text>
          </View>
          <View style={styles.dayView}>
            <TouchableHighlight
              style={styles.dayButton}
              underlayColor='#FFF'
              activeOpacity={1}
              onPress={() => {
                if (!this.state.picked) {
                  this.setState({
                    picked: true
                  });
                }
              }}
            >
              <Text style={styles.day}>{this.state.selectedDay}天</Text>
            </TouchableHighlight>
          </View>
        </View>
        <TouchableHighlight
          style={styles.button}
          underlayColor='#009999'
          activeOpacity={0.5}
        >
          <Text style={styles.buttonText}>确认期限</Text>
        </TouchableHighlight>
        {this.state.picked ?
        <View>
          <View style={styles.pickFinish}>
            <TouchableHighlight
              style={styles.finish}
              underlayColor='#FFF'
              activeOpacity={1}
              onPress={() => {
                if (this.state.picked) {
                  this.setState({
                    picked: false
                  });
                }
              }}
            >
              <Text style={styles.finishText}>完成</Text>
            </TouchableHighlight>
          </View>
          <PickerIOS
            selectedValue={this.state.selectedDay}
            onValueChange={(day) => this.setState({
              selectedDay: day,
              endDate: calculateDate(new Date(), Number(day))
            })}>
            {days.map((day) => (
              <PickerIOS.Item
                key={day}
                label={day}
                value={day}
              />
            ))}
          </PickerIOS>
        </View> :
        <View></View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    height: 150,
    margin: 20,
    backgroundColor: '#FFF',
  },
  dateView: {
    height: 50,
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 16,
    color: '#FE80B8'
  },
  dayView: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dayButton: {
    height: 40,
    margin: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  day: {
    fontSize: 24,
    alignSelf: 'center'
  },
  button: {
    height: 40,
    margin: 20,
    backgroundColor: '#009999',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'center',
  },
  pickFinish: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#F0F0F0'
  },
  finish: {
    alignSelf: 'flex-end'
  },
  finishText: {
    color: '#0D8AEE',
    fontSize: 16
  }
});
