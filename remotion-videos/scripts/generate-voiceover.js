/**
 * Day 1 AI配音生成器
 * 使用 OpenAI TTS API 生成高质量中文配音
 */

import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 检查 API Key
if (!process.env.OPENAI_API_KEY) {
  console.error('❌ 错误: 未设置 OPENAI_API_KEY 环境变量');
  console.log('\n请运行: export OPENAI_API_KEY="your-api-key"');
  console.log('获取 API Key: https://platform.openai.com/api-keys\n');
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 确保输出目录存在
const audioDir = path.join(__dirname, '../public/audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

async function generateSceneAudio(scene, settings) {
  const { scene: sceneNum, title, narration } = scene;
  const { voice, model, speed } = settings;

  console.log(`\n🎙️  正在生成 Scene ${sceneNum} (${title}) 的配音...`);
  console.log(`   文本长度: ${narration.length} 字符`);

  try {
    const mp3 = await openai.audio.speech.create({
      model: model,
      voice: voice,
      input: narration,
      speed: speed,
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());
    const outputPath = path.join(audioDir, `scene${sceneNum}.mp3`);

    fs.writeFileSync(outputPath, buffer);

    console.log(`   ✅ 生成成功: scene${sceneNum}.mp3`);
    console.log(`   文件大小: ${(buffer.length / 1024).toFixed(2)} KB`);

    return true;
  } catch (error) {
    console.error(`   ❌ 生成失败:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🎬 Day 1 配音生成器');
  console.log('='.repeat(50));

  // 读取配音脚本
  const scriptPath = path.join(__dirname, 'day1-voiceover.json');
  console.log(`\n📖 读取配音脚本: ${scriptPath}`);

  const scriptData = JSON.parse(fs.readFileSync(scriptPath, 'utf-8'));
  const { scenes, ttsSettings } = scriptData;

  console.log(`\n⚙️  TTS 设置:`);
  console.log(`   语音: ${ttsSettings.voice}`);
  console.log(`   模型: ${ttsSettings.model}`);
  console.log(`   语速: ${ttsSettings.speed}`);
  console.log(`\n📊 共 ${scenes.length} 个场景`);

  let successCount = 0;
  let failCount = 0;
  const startTime = Date.now();

  // 生成每个场景的音频
  for (const scene of scenes) {
    const success = await generateSceneAudio(scene, ttsSettings);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }

    // 添加延迟，避免 API 限流
    if (scene !== scenes[scenes.length - 1]) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log('\n' + '='.repeat(50));
  console.log('📊 生成完成统计:');
  console.log(`   ✅ 成功: ${successCount} 个`);
  console.log(`   ❌ 失败: ${failCount} 个`);
  console.log(`   ⏱️  用时: ${duration} 秒`);

  if (successCount > 0) {
    console.log(`\n🎉 音频文件已保存到: ${audioDir}`);
    console.log('\n下一步:');
    console.log('1. 访问 http://localhost:3003');
    console.log('2. 选择 "Day1Ultimate" 查看完整效果');
    console.log('3. 或运行: npx remotion render Day1Ultimate out/day1-ultimate.mp4');
  }

  if (failCount > 0) {
    console.log('\n⚠️  部分场景生成失败，请检查:');
    console.log('   - OpenAI API Key 是否有效');
    console.log('   - 账户是否有足够余额');
    console.log('   - 网络连接是否正常');
  }

  console.log('\n💰 预计费用: ~$0.30 (TTS-1-HD 模型)');
}

main().catch(console.error);
