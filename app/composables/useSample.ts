export const useSample = () => {
  const state = useState('sample-state', () => 'Hello from Composable')
  return { state }
}
