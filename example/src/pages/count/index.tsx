import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import './index.scss'

export interface State {

}

export interface Props {
  value: number;
  add(): void;
  minus(): void;
}

const mapState = (state: any) => {
  return {
    value: state.count,
  };
};

const mapActions = (dispatch: (action: Action) => void) => ({
  add: () => {
    dispatch({ type: 'count/+' })
  },
  minus: () => {
    dispatch({ type: 'count/-' })
  },
});

@connect(mapState, mapActions)
export default class Index extends Component<Props, State> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: 'Count'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { value, add, minus } = this.props;

    return (
      <View className='index'>
        <View className="content">
          <Text className="value">{value}</Text>
        </View>
        <View className="actions">
          <View className="item add" onClick={this.props.add.bind(this)}>+</View>
          <View className="item minus" onClick={this.props.minus.bind(this)}>-</View>
        </View>
      </View>
    )
  }
}
