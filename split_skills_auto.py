from PIL import Image
import os

def split_skills_auto():
    """自動分割劍系技能圖片"""
    
    output_directory = "skills_output"
    os.makedirs(output_directory, exist_ok=True)
    
    # 技能名稱對應 (根據圖片中的文字)
    skills_names = [
        "斬虛_橫秋", "斬虛_斷塵", "斬虛_霄寒",
        "斬虛_分光", "伏龍_折花", "伏龍_摭影",
        "伏龍_決雲", "伏龍_揮繒", "重光_龜蛇",
        "重光_鬥彰", "重光_六曜", "重光_星移"
    ]
    
    print("請確保您已將兩張技能圖片放在當前目錄")
    print("圖片應包含:")
    print("  - 第一張: 3x3 的 9 個技能")
    print("  - 第二張: 1x3 的 3 個技能")
    print()
    
    # 列出當前目錄的圖片檔案
    image_files = [f for f in os.listdir('.') if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    
    if len(image_files) < 2:
        print(f"錯誤: 只找到 {len(image_files)} 個圖片檔案")
        print("請將兩張技能截圖放到此資料夾")
        return
    
    print(f"找到 {len(image_files)} 個圖片檔案:")
    for i, f in enumerate(image_files[:2], 1):
        print(f"  {i}. {f}")
    
    # 處理圖片
    skill_index = 0
    
    # 第一張圖 (3x3)
    if len(image_files) > 0:
        img1 = Image.open(image_files[0])
        w1, h1 = img1.size
        skill_w = w1 // 3
        skill_h = h1 // 3
        
        print(f"\n處理第一張圖片 ({image_files[0]}): {w1}x{h1}px")
        
        for row in range(3):
            for col in range(3):
                left = col * skill_w
                top = row * skill_h
                right = left + skill_w
                bottom = top + skill_h
                
                skill_img = img1.crop((left, top, right, bottom))
                
                if skill_index < len(skills_names):
                    filename = f"{skill_index + 1:02d}_{skills_names[skill_index]}.png"
                else:
                    filename = f"skill_{skill_index + 1:02d}.png"
                
                output_path = os.path.join(output_directory, filename)
                skill_img.save(output_path)
                print(f"  ✓ {filename}")
                
                skill_index += 1
    
    # 第二張圖 (1x3)
    if len(image_files) > 1:
        img2 = Image.open(image_files[1])
        w2, h2 = img2.size
        skill_w = w2 // 3
        skill_h = h2
        
        print(f"\n處理第二張圖片 ({image_files[1]}): {w2}x{h2}px")
        
        for col in range(3):
            left = col * skill_w
            top = 0
            right = left + skill_w
            bottom = skill_h
            
            skill_img = img2.crop((left, top, right, bottom))
            
            if skill_index < len(skills_names):
                filename = f"{skill_index + 1:02d}_{skills_names[skill_index]}.png"
            else:
                filename = f"skill_{skill_index + 1:02d}.png"
            
            output_path = os.path.join(output_directory, filename)
            skill_img.save(output_path)
            print(f"  ✓ {filename}")
            
            skill_index += 1
    
    print(f"\n完成! 共分割出 {skill_index} 個技能圖示")
    print(f"儲存位置: {os.path.abspath(output_directory)}")

if __name__ == "__main__":
    split_skills_auto()
