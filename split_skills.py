from PIL import Image
import os

def split_skills_image(input_path, output_dir, rows, cols):
    """
    將技能圖片分割成個別的小圖
    
    Args:
        input_path: 輸入圖片路徑
        output_dir: 輸出資料夾
        rows: 行數
        cols: 列數
    """
    # 開啟圖片
    img = Image.open(input_path)
    width, height = img.size
    
    # 計算每個技能圖示的大小
    skill_width = width // cols
    skill_height = height // rows
    
    # 獲取檔案名稱（不含副檔名）
    base_name = os.path.splitext(os.path.basename(input_path))[0]
    
    # 建立輸出資料夾
    os.makedirs(output_dir, exist_ok=True)
    
    # 分割圖片
    skill_count = 1
    for row in range(rows):
        for col in range(cols):
            # 計算裁切區域
            left = col * skill_width
            top = row * skill_height
            right = left + skill_width
            bottom = top + skill_height
            
            # 裁切圖片
            skill_img = img.crop((left, top, right, bottom))
            
            # 儲存圖片
            output_path = os.path.join(output_dir, f"{base_name}_skill_{skill_count:02d}.png")
            skill_img.save(output_path)
            print(f"已儲存: {output_path}")
            
            skill_count += 1

# 主程式
if __name__ == "__main__":
    import sys
    
    # 設定輸出資料夾
    output_directory = "skills_output"
    
    # 檢查命令列參數
    if len(sys.argv) < 2:
        print("使用方式: python split_skills.py <image_path> [rows] [cols]")
        print("範例: python split_skills.py sword_skills_1.png 3 3")
        sys.exit(1)
    
    image_path = sys.argv[1]
    rows = int(sys.argv[2]) if len(sys.argv) > 2 else 3
    cols = int(sys.argv[3]) if len(sys.argv) > 3 else 3
    
    if os.path.exists(image_path):
        print(f"處理圖片: {image_path}")
        print(f"分割為 {rows}x{cols} = {rows*cols} 個技能圖示")
        split_skills_image(image_path, output_directory, rows=rows, cols=cols)
        print(f"\n完成! 所有技能圖片已儲存至 '{output_directory}' 資料夾")
    else:
        print(f"錯誤: 找不到檔案 '{image_path}'")
