import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { API_BASE } from './apiConfig';

export default function NovaTarefaScreen({ navigation }) {
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('pendente');

  const salvar = async () => {
    if (!descricao.trim()) {
      Alert.alert('Erro', 'Descrição não pode ser vazia.');
      return;
    }
    try {
      await axios.post(`${API_BASE}/tarefas`, { descricao, status });
      navigation.goBack();
    } catch (e) {
      Alert.alert('Erro', 'Falha ao salvar tarefa.');
      console.log(e?.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Ex: Comprar pão"
      />

      <Text style={styles.label}>Status</Text>
      <View style={styles.statusRow}>
        {['pendente', 'completa'].map(s => (
          <TouchableOpacity
            key={s}
            style={[styles.statusBtn, status === s && styles.statusAtivo]}
            onPress={() => setStatus(s)}
          >
            <Text style={[styles.statusTxt, status === s && styles.statusTxtAtivo]}>{s}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.salvar} onPress={salvar}>
        <Text style={styles.salvarTxt}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { marginTop: 12, fontWeight: '600' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, marginTop: 6 },
  statusRow: { flexDirection: 'row', marginTop: 8 },
  statusBtn: { paddingVertical: 6, paddingHorizontal: 14, backgroundColor: '#ddd', borderRadius: 16, marginRight: 8 },
  statusAtivo: { backgroundColor: '#0066cc' },
  statusTxt: { color: '#000' },
  statusTxtAtivo: { color: '#fff' },
  salvar: { marginTop: 24, backgroundColor: '#28a745', padding: 14, borderRadius: 8, alignItems: 'center' },
  salvarTxt: { color: '#fff', fontWeight: '700' }
});