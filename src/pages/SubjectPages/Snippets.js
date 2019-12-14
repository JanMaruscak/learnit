import React from 'react'

export default function Snippets() {
    return (
        <main>
            <h1>Snippets</h1>
            <pre style={{textAlign: 'left'}}>
                {`
public const int WM_NCLBUTTONDOWN = 0xA1;
public const int HT_CAPTION = 0x2;

[DllImport("user32.dll")]
public static extern int SendMessage(IntPtr hWnd, int Msg, int wParam, int lParam);
[DllImport("user32.dll")]
public static extern bool ReleaseCapture();


[DllImport("Gdi32.dll", EntryPoint = "CreateRoundRectRgn")]
private static extern IntPtr CreateRoundRectRgn
(
    int nLeftRect,     // x-coordinate of upper-left corner
    int nTopRect,      // y-coordinate of upper-left corner
    int nRightRect,    // x-coordinate of lower-right corner
    int nBottomRect,   // y-coordinate of lower-right corner
    int nWidthEllipse, // height of ellipse
    int nHeightEllipse // width of ellipse
);
private void menu_panel_MouseDown(object sender, MouseEventArgs e)
{
    if (e.Button == MouseButtons.Left) // Drag formy
    {
        ReleaseCapture();
        SendMessage(Handle, WM_NCLBUTTONDOWN, HT_CAPTION, 0);
    }
}
                `}
            </pre>
        </main>
    )
}