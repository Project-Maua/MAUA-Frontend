import React from 'react'
import { View } from 'react-native'
import Activity from './Activity'

const ActivityDayFilter = ({data, day}) => {
    const filter = (activity) => {
        activity_day = activity.startTime.substr(8, 2)
        return parseInt(activity_day) === day
    }

    return (   
        <View>     
            <View style={""}>
                {data.filter(filter).map((activity, index) => (
                <Activity key={index} activity={activity} />
                ))}
            </View>
      </View>
    )
}

export default ActivityDayFilter