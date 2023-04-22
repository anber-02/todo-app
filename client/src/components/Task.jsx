import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { HOST } from '../ipConfig'

function CheckMark ({ id, completed, toggleTodo }) {
  async function toggle () {
    const response = await fetch(`${HOST}/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        value: !completed
      })
    })
    const data = await response.json()
    console.log(data)
    toggleTodo(id)
  }
  return (
    <Pressable
      onPress={toggle}
      style={[
        styles.checkMark,
        { backgroundColor: completed === 0 ? '#E9E9EF' : '#0EA5E9' }
      ]}
    />
  )
}

export default function Task (
  {
    id,
    title,
    shared_with_id,
    completed,
    clearTodo,
    toggleTodo
  }
) {
  const [isDeleteActive, setIsDeleteActive] = useState(false)
  async function deleteTodo () {
    const response = await fetch(`${HOST}/todos/${id}`, {
      method: 'DELETE'
    })
    clearTodo(id)
    console.log(response.status)
  }

  return (
    <TouchableOpacity
      onLongPress={() => setIsDeleteActive(true)}
      onPress={() => setIsDeleteActive(false)}
      activeOpacity={0.8}
      style={[styles.container]}
    >
      <View style={styles.containerTextCheckBox}>
        <CheckMark id={id} completed={completed} toggleTodo={toggleTodo} />
        <Text style={styles.text}>{title}</Text>
      </View>
      {
        shared_with_id !== null
          ? (
            <Feather
              // onPress={handlePresentShared}
              name='users'
              size={20}
              color='#383839'
            />
            )
          : (
            <Feather
              // onPress={handlePresentModal}
              name='share'
              size={20}
              color='#383839'
            />
            )
      }
      {isDeleteActive && (
        <Pressable onPress={deleteTodo} style={styles.deleteButton}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>X</Text>
        </Pressable>
      )}

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 21,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  containerTextCheckBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#383839',
    letterSpacing: -0.011 * 16, // 16 = baseFontSize
    flexShrink: 1,
    marginHorizontal: 8
  },
  checkMark: {
    width: 20,
    height: 20,
    borderRadius: 7
  },
  deleteButton: {
    position: 'absolute',
    right: 0,
    top: -6,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ef4444',
    borderRadius: 10
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  title: {
    fontWeight: '900',
    letterSpacing: 0.5,
    fontSize: 16
  },
  subtitle: {
    color: '#101318',
    fontSize: 14,
    fontWeight: 'bold'
  },
  description: {
    color: '#56636F',
    fontSize: 13,
    fontWeight: 'normal',
    width: '100%'
  }
})
