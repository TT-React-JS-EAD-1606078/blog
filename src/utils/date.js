import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export const formatDate = (dateString) => {
  const formatDate = format(new Date(dateString), 'dd/MMMM/yyyy - HH:mm', { locale: ptBR })
  // const formatDate = new Date(dateString).toLocaleString()

  return formatDate
}