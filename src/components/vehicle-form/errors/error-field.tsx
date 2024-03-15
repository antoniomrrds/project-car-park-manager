import { Span } from '@/components/vehicle-form/errors'
import { FiAlertTriangle } from 'react-icons/fi'

type ErrorProps = {
  value: string
  errors: Record<string, any>
}

export const Error = ({ errors, value }: ErrorProps) => {
  if (errors[value]) {
    return (
      <Span>
        <FiAlertTriangle size={20} className="icons" />
        {errors[value]?.message}
      </Span>
    )
  }
}
