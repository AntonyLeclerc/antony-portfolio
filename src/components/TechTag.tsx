type TechType = {
    value: string
}

export default function TechTag({ value }: TechType) {
  return (
    <div className="techno">{value}</div>
  )
}
