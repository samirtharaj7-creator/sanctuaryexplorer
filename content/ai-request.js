const MAX_MESSAGE_LENGTH = 1200;

function validHistory(input) {
  if (!Array.isArray(input)) return null;

  const history = [];
  for (const item of input) {
    if (!item || !["user", "model"].includes(item.role) || !Array.isArray(item.parts)) return null;
    const parts = item.parts.map(part => typeof part === "string" ? part.trim() : "");
    if (!parts.length || parts.some(part => !part)) return null;
    history.push({ role: item.role, parts });
  }
  return history;
}

export function createExplorerAiPayload(message, inputHistory) {
  const content = typeof message === "string" ? message.trim() : "";
  if (!content || content.length > MAX_MESSAGE_LENGTH) return null;

  const history = validHistory(inputHistory);
  if (!history) return null;

  return { message: content, history };
}

export function appendExplorerAiHistory(inputHistory, userText, modelText) {
  const history = validHistory(inputHistory);
  const user = typeof userText === "string" ? userText.trim() : "";
  const model = typeof modelText === "string" ? modelText.trim() : "";
  if (!history || !user || !model) return null;

  return [
    ...history,
    { role: "user", parts: [user] },
    { role: "model", parts: [model] }
  ];
}
