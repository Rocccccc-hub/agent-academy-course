/**
 * 使用 OpenAI TTS API 生成配音
 *
 * 使用方法：
 * 1. 设置环境变量：export OPENAI_API_KEY="your-key"
 * 2. 安装依赖：npm install openai
 * 3. 运行：node scripts/generate-audio.js
 */

const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

// 读取配音脚本
const narrationScript = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'day1-narration.json'), 'utf-8')
);

// 初始化 OpenAI 客户端
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 输出目录
const audioDir = path.join(__dirname, '..', 'public', 'audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

async function generateAudio() {
  console.log('🎙️ 开始生成配音...\n');

  for (const scene of narrationScript.scenes) {
    console.log(`场景 ${scene.scene}: ${scene.title}`);
    console.log(`内容: ${scene.narration.substring(0, 50)}...`);

    try {
      const mp3 = await openai.audio.speech.create({
        model: narrationScript.ttsInstructions.model,
        voice: narrationScript.ttsInstructions.voice,
        input: scene.narration,
        speed: narrationScript.ttsInstructions.speed,
      });

      const buffer = Buffer.from(await mp3.arrayBuffer());
      const filename = `scene${scene.scene}.mp3`;
      const filepath = path.join(audioDir, filename);

      fs.writeFileSync(filepath, buffer);
      console.log(`✅ 已生成: ${filename} (${Math.round(buffer.length / 1024)}KB)`);
      console.log('');
    } catch (error) {
      console.error(`❌ 场景 ${scene.scene} 生成失败:`, error.message);
    }
  }

  console.log('🎉 所有配音生成完成！');
  console.log(`📁 音频文件位置: ${audioDir}`);
}

// 生成配音时间线（用于 Remotion）
function generateAudioTimeline() {
  const timeline = narrationScript.scenes.map(scene => ({
    scene: scene.scene,
    title: scene.title,
    audioFile: `audio/scene${scene.scene}.mp3`,
    startFrame: scene.startTime * 30, // 假设 30fps
    durationFrames: scene.duration * 30,
  }));

  const timelineFile = path.join(__dirname, 'audio-timeline.json');
  fs.writeFileSync(timelineFile, JSON.stringify(timeline, null, 2));

  console.log('\n📋 音频时间线已生成');
  console.log(`文件位置: ${timelineFile}`);
}

// 主函数
async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ 错误: 未设置 OPENAI_API_KEY 环境变量');
    console.log('\n请执行:');
    console.log('export OPENAI_API_KEY="your-api-key"');
    process.exit(1);
  }

  await generateAudio();
  generateAudioTimeline();
}

main().catch(console.error);
