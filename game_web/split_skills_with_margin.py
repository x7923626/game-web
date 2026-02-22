from PIL import Image
import os

def split_with_margins(input_path, output_dir, rows, cols, base_name="skill", margin_percent=0.02):
    """
    分割技能圖片，並添加邊距以避免切到其他技能的內容
    
    margin_percent: 每邊裁切掉的百分比（預設2%）
    """
    img = Image.open(input_path)
    width, height = img.size
    
    print(f"原始圖片尺寸: {width}x{height}")
    
    # 計算每個格子的寬度和高度
    cell_width = width / cols
    cell_height = height / rows
    
    # 計算邊距（像素）
    margin_x = cell_width * margin_percent
    margin_y = cell_height * margin_percent
    
    print(f"每格尺寸: {cell_width:.1f}x{cell_height:.1f}")
    print(f"邊距: {margin_x:.1f}px (左右), {margin_y:.1f}px (上下)")
    
    # 建立輸出資料夾
    os.makedirs(output_dir, exist_ok=True)
    
    skill_count = 1
    for row in range(rows):
        for col in range(cols):
            # 計算基本位置
            left = col * cell_width
            top = row * cell_height
            right = (col + 1) * cell_width
            bottom = (row + 1) * cell_height
            
            # 添加邊距（向內縮小）
            left = round(left + margin_x)
            top = round(top + margin_y)
            right = round(right - margin_x)
            bottom = round(bottom - margin_y)
            
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
    
    # 處理第一張圖片 (3x3)，使用較大的邊距
    print("=" * 50)
    print("處理第一張圖片 (3x3 網格)...")
    print("=" * 50)
    count1 = split_with_margins("1.png", output_directory, rows=3, cols=3, 
                                base_name="sword_skill", margin_percent=0.03)
    total += count1
    
    # 處理第二張圖片 (1x3)
    print("\n" + "=" * 50)
    print("處理第二張圖片 (1x3 網格)...")
    print("=" * 50)
    count2 = split_with_margins("2.png", output_directory, rows=1, cols=3, 
                                base_name=f"sword_skill", margin_percent=0.03)
    
    # 重新命名第二批圖片，使編號連續
    for i in range(1, count2 + 1):
        old_name = os.path.join(output_directory, f"sword_skill_{i:02d}.png")
        new_name = os.path.join(output_directory, f"sword_skill_{count1 + i:02d}.png")
        if os.path.exists(old_name) and i <= count2:
            temp_name = os.path.join(output_directory, f"temp_{i:02d}.png")
            os.rename(old_name, temp_name)
    
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
