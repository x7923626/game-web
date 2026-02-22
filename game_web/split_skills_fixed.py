from PIL import Image
import os

def split_with_proper_ratio(input_path, output_dir, rows, cols, base_name="skill"):
    """
    等比例分割技能圖片，保持每個技能的完整比例
    """
    img = Image.open(input_path)
    width, height = img.size
    
    print(f"原始圖片尺寸: {width}x{height}")
    
    # 計算每個格子的寬度和高度
    cell_width = width / cols
    cell_height = height / rows
    
    print(f"每格尺寸: {cell_width:.1f}x{cell_height:.1f}")
    
    # 建立輸出資料夾
    os.makedirs(output_dir, exist_ok=True)
    
    skill_count = 1
    for row in range(rows):
        for col in range(cols):
            # 使用浮點數計算精確位置，然後四捨五入
            left = round(col * cell_width)
            top = round(row * cell_height)
            right = round((col + 1) * cell_width)
            bottom = round((row + 1) * cell_height)
            
            # 裁切圖片
            skill_img = img.crop((left, top, right, bottom))
            
            # 儲存圖片
            output_path = os.path.join(output_dir, f"{base_name}_{skill_count:02d}.png")
            skill_img.save(output_path, "PNG")
            
            actual_size = skill_img.size
            print(f"  ✓ {base_name}_{skill_count:02d}.png ({actual_size[0]}x{actual_size[1]})")
            
            skill_count += 1
    
    return skill_count - 1

if __name__ == "__main__":
    output_directory = "skills_output"
    
    # 清空輸出資料夾
    if os.path.exists(output_directory):
        import shutil
        shutil.rmtree(output_directory)
    
    os.makedirs(output_directory, exist_ok=True)
    
    total = 0
    
    # 處理第一張圖片 (3x3)
    print("=" * 50)
    print("處理第一張圖片 (3x3 網格)...")
    print("=" * 50)
    count1 = split_with_proper_ratio("1.png", output_directory, rows=3, cols=3, base_name="sword_skill")
    total += count1
    
    # 處理第二張圖片 (1x3)
    print("\n" + "=" * 50)
    print("處理第二張圖片 (1x3 網格)...")
    print("=" * 50)
    count2 = split_with_proper_ratio("2.png", output_directory, rows=1, cols=3, base_name=f"sword_skill")
    
    # 重新命名第二批圖片，使編號連續
    for i in range(1, count2 + 1):
        old_name = os.path.join(output_directory, f"sword_skill_{i:02d}.png")
        new_name = os.path.join(output_directory, f"sword_skill_{count1 + i:02d}.png")
        if os.path.exists(old_name) and i <= count2:
            # 先移到臨時檔名
            temp_name = os.path.join(output_directory, f"temp_{i:02d}.png")
            os.rename(old_name, temp_name)
    
    # 再從臨時檔名改回正確編號
    for i in range(1, count2 + 1):
        temp_name = os.path.join(output_directory, f"temp_{i:02d}.png")
        new_name = os.path.join(output_directory, f"sword_skill_{count1 + i:02d}.png")
        if os.path.exists(temp_name):
            os.rename(temp_name, new_name)
    
    total = count1 + count2
    
    print("\n" + "=" * 50)
    print(f"✓ 完成! 共分割 {total} 個技能圖示")
    print(f"儲存位置: {os.path.abspath(output_directory)}")
    print("=" * 50)
