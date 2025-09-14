# Gemini CLI 啟動說明

本文件將說明如何啟動與使用 Gemini CLI。

## 互動模式

要啟動互動式對話，請直接執行 `gemini` 命令：

```bash
gemini
```

這將會開啟一個對話視窗，您可以直接與 Gemini 進行互動。

## 單次指令模式

如果您只想執行單一指令並立即取得結果，可以將您的問題直接附加在 `gemini` 命令後面：

```bash
gemini "請幫我列出目前的檔案"
```

```bash
gemini "1 + 2 等於多少？"
```

## 取得說明

要查看所有可用的指令與選項，請使用 `--help` 或 `help` 指令：

```bash
gemini --help
```

或在互動模式中輸入：

```
/help
```

## 其他選項 (範例)

根據您的 Gemini CLI 版本，可能還有其他可用的啟動選項，例如：

*   **指定模型**:
    ```bash
    gemini --model gemini-1.5-pro "翻譯這段文字為英文"
    ```
*   **設定輸出格式**:
    ```bash
    gemini --format json "列出目前的資料夾結構"
    ```

請隨時使用 `--help` 來探索更多功能！
