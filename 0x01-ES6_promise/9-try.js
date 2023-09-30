export default function guardrail(mathFunction) {
  try {
    const result = mathFunction();
    return [result, 'Guardrail was processed'];
  } catch (error) {
    return [`${error.name}: ${error.message}`, 'Guardrail was processed'];
  }
}
