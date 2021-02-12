import React from 'react'

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  i?: number;
  ok?: boolean;
  fn: (bob: string) => string;
  person: Person;
}

const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input type="text" />
    </div>
  )
}