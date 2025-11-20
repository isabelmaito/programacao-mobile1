import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, RefreshControl } from 'react-native';
import axios from 'axios';
import { API_BASE } from './apiConfig';
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState('todas');
  const [loading, setLoading] = useState(false);

  const carregar = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/tarefas`);
      setTarefas(res.data);
    } catch (e) {
      console.log('Erro ao carregar tarefas', e.message);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(useCallback(() => { carregar(); }, []));

  const filtradas = tarefas.filter(t => {
    if (filtro === 'todas') return true;
    return t.status === filtro;
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, item.status === 'completa' ? styles.completa : styles.pendente]}
      onPress={() => navigation.navigate('EditarTarefa', { tarefa: item })}
    >
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Text style={styles.status}>{item.status}</Text>
      <TouchableOpacity
        style={styles.botaoExcluir}
        onPress={async () => {
          try {
            await axios.delete(`${API_BASE}/tarefas/${item.id}`);
            carregar();
          } catch (e) {
            console.log('Erro ao deletar', e.message);
          }
        }}
      >
        <Text style={styles.botaoExcluirTxt}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filtros}>
        {['todas', 'pendente', 'completa'].map(f => (
          <TouchableOpacity
            key={f}
            style={[styles.filtroBtn, filtro === f && styles.filtroAtivo]}
            onPress={() => setFiltro(f)}
          >
            <Text style={styles.filtroTxt}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filtradas}
        keyExtractor={t => String(t.id)}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={carregar} />
        }
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma tarefa.</Text>}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('NovaTarefa')}
      >
        <Text style={styles.fabTxt}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: '#fafafa' },
  filtros: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 8 },
  filtroBtn: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, backgroundColor: '#ddd' },
  filtroAtivo: { backgroundColor: '#555' },
  filtroTxt: { color: '#000' },
  vazio: { textAlign: 'center', marginTop: 24, color: '#777' },
  card: { padding: 14, borderRadius: 8, marginVertical: 6, position: 'relative' },
  pendente: { backgroundColor: '#ffe9c7' },
  completa: { backgroundColor: '#c7ffd6' },
  descricao: { fontSize: 16, fontWeight: '600' },
  status: { fontSize: 12, marginTop: 4 },
  botaoExcluir: { position: 'absolute', top: 6, right: 8, backgroundColor: '#d33', width: 26, height: 26, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  botaoExcluirTxt: { color: '#fff', fontWeight: '700' },
  fab: { position: 'absolute', bottom: 24, right: 24, backgroundColor: '#0066cc', width: 56, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center', elevation: 4 },
  fabTxt: { color: '#fff', fontSize: 28, fontWeight: '700' }
});