/**
 * Knowledge-layer types.
 *
 * `KnowledgeTopic` is a single verified fact block that the LLM may cite.
 * `BusinessUseCase` maps colloquial business problems to the relevant
 * capability topics and giving the LLM reasoning guidance.
 */
export type KnowledgeTopic = {
  id: string;
  /** broad grouping used for organisation (product / crm / ai / ...) */
  section: string;
  /** literal keywords a direct query might contain */
  keywords: string[];
  /** colloquial / problem phrasing that should activate this topic */
  aliases: string[];
  /** other topic ids to pull in alongside this one when it activates */
  related: string[];
  /** verified factual content */
  content: string;
};

export type BusinessUseCase = {
  id: string;
  /** phrasing that signals this business problem */
  patterns: string[];
  /** knowledge topic ids the LLM should reason over */
  capabilities: string[];
  /** guidance explaining how to connect problem to capabilities */
  guidance: string;
};