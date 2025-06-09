import { StyleSheet } from "react-native";
import { AppsColors } from "../navigators/utils/colors"

export const NoteCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: "white",
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: '#d1d1d1',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18,
    flex: 1,
    backgroundColor: 'transparent',
    
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#222',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    marginLeft: 6,
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
  }
})
