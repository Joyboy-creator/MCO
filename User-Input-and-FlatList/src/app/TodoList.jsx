import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (input.trim() === "") {
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      name: input.trim(),
      completed: false,
    };

    setItems([...items, newItem]);
    setInput("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity
        style={styles.taskButton}
        onPress={() => toggleComplete(item.id)}
      >
        <View
          style={[
            styles.checkCircle,
            item.completed && styles.checkCircleCompleted,
          ]}
        >
          {item.completed && <Text style={styles.checkMark}>✓</Text>}
        </View>

        <Text style={[styles.taskText, item.completed && styles.completedText]}>
          {item.name}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteItem(item.id)}
      >
        <Text style={styles.deleteIcon}>×</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.title}>My To-Do List</Text>

          <Text style={styles.subtitle}>Small steps make big progress</Text>
        </View>

        <Text style={styles.leaf}>⌁</Text>
      </View>

      {/* Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputIcon}>✎</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter a task..."
          placeholderTextColor="#9AA3B2"
          value={input}
          onChangeText={setInput}
          onSubmitEditing={addItem}
          returnKeyType="done"
        />
      </View>

      {/* Add Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={addItem}
        activeOpacity={0.8}
      >
        <Text style={styles.plus}>+</Text>

        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>

      {/* Task List */}
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          items.length === 0 ? styles.emptyList : styles.list
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>○</Text>

            <Text style={styles.emptyTitle}>No tasks yet.</Text>

            <Text style={styles.emptyText}>Add your first task!</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  headerText: {
    flex: 1,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#17213A",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 16,
    color: "#8993A7",
  },

  leaf: {
    fontSize: 42,
    color: "#8A9B9A",
    transform: [{ rotate: "-20deg" }],
    marginLeft: 10,
  },

  inputContainer: {
    height: 62,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E5EA",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    marginBottom: 14,
  },

  inputIcon: {
    fontSize: 24,
    color: "#8993A7",
    marginRight: 12,
  },

  input: {
    flex: 1,
    fontSize: 17,
    color: "#17213A",
  },

  addButton: {
    height: 58,
    backgroundColor: "#8296B8",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },

  plus: {
    color: "#FFFFFF",
    fontSize: 28,
    marginRight: 7,
    fontWeight: "300",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },

  list: {
    paddingBottom: 30,
  },

  taskContainer: {
    minHeight: 72,
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    marginBottom: 12,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  taskButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  checkCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2.5,
    borderColor: "#8C97A9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  checkCircleCompleted: {
    backgroundColor: "#8296B8",
    borderColor: "#8296B8",
  },

  checkMark: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  taskText: {
    flex: 1,
    fontSize: 17,
    color: "#17213A",
  },

  completedText: {
    color: "#929AAA",
    textDecorationLine: "line-through",
  },

  deleteButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  deleteIcon: {
    color: "#8C97A9",
    fontSize: 28,
    fontWeight: "300",
  },

  emptyList: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },

  emptyContainer: {
    alignItems: "center",
  },

  emptyIcon: {
    fontSize: 48,
    color: "#AAB4C6",
    marginBottom: 8,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#8B96AA",
  },

  emptyText: {
    fontSize: 16,
    color: "#9AA3B2",
    marginTop: 4,
  },
});
