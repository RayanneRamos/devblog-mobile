import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 4,
    marginBottom: 14,
    paddingHorizontal: 12,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  
  header: {
    marginHorizontal: 8,
  },

  cover: {  
    width: 90,
    height: 90,
    borderRadius: 4,
  },

  body: {
    width: '70%',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },

  description: {
    fontSize: 12,
    lineHeight: 16,
  },
});