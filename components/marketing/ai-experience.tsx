"use client";

import { useState } from "react";
import type { AvatarState } from "@/components/marketing/ai-chat";
import { AderiqoAIVisual } from "@/components/marketing/ai-assistant-visual";
import { AiChat } from "@/components/marketing/ai-chat";

export function AiExperience() {
  const [avatarState, setAvatarState] = useState<AvatarState>("idle");

  return (
    <div className="ai-experience">
      <AderiqoAIVisual state={avatarState} />
      <div className="ai-experience__chat">
        <AiChat onAvatarState={setAvatarState} />
      </div>
    </div>
  );
}
