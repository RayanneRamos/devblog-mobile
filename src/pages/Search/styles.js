import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 18,
  },

  containerInput: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  input: {
    width: '85%',
    backgroundColor: '#c4c4c4',
    height: 45,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    padding: 8,
    fontSize: 16,
  },

  searchButton: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4c4c4',
    height: 45,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    marginLeft: -1,
  },

  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },

  searchArticle: {
    flex: 1,
  },
});