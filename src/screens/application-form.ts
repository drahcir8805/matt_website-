// AUTO-GENERATED from design canvas — edit the design or regenerate.

const screen = {
  desktop: `<div style="width:1440px; height:1000px; background:#F6F1EA; border-radius:3px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,.08); position:relative; font-family:'Mulish',sans-serif; color:#2A2420;">
    <!-- faint top wordmark -->
    <div style="position:absolute; top:0; left:0; right:0; display:flex; align-items:center; justify-content:space-between; padding:36px 64px;">
      <div style="font-family:'Cormorant Garamond',serif; font-size:21px; font-weight:600; color:#2A2420;">Matt</div>
      <a href="#" style="font-size:12px; letter-spacing:0.2em; text-transform:uppercase; color:#6B5F54; text-decoration:none;">← Back to portfolio</a>
    </div>

    <!-- centered framed panel -->
    <div style="position:absolute; left:50%; top:54%; transform:translate(-50%,-50%); width:760px;">
      <div style="text-align:center; margin-bottom:40px;">
        <div style="font-size:12px; letter-spacing:0.34em; text-transform:uppercase; color:#B08D57; margin-bottom:20px;">Begin your enquiry</div>
        <h1 style="font-family:'Cormorant Garamond',serif; font-weight:400; font-size:60px; line-height:1.02; color:#2A2420; margin:0 0 14px;">Tell me about your day</h1>
        <p style="font-size:16px; line-height:1.7; color:#6B5F54; margin:0 auto; max-width:430px;">Three small things to start. We'll talk through the rest together, just the two of us.</p>
      </div>

      <!-- the invitation panel -->
      <div style="background:#FBF8F3; border:1px solid rgba(42,36,32,0.14); border-radius:4px; box-shadow:0 30px 60px -40px rgba(42,36,32,0.4); padding:8px;">
        <div style="border:1px solid rgba(176,141,87,0.4); border-radius:2px; padding:54px 60px 56px;">
          <!-- monogram -->
          <div style="text-align:center; margin-bottom:42px;">
            <div style="display:inline-flex; align-items:center; justify-content:center; width:54px; height:54px; border:1px solid rgba(176,141,87,0.55); border-radius:50%; font-family:'Cormorant Garamond',serif; font-size:21px; letter-spacing:0.04em; color:#B08D57;">MR</div>
          </div>

          <!-- field: name -->
          <div style="margin-bottom:38px;">
            <label style="display:block; font-size:11px; letter-spacing:0.24em; text-transform:uppercase; color:#9a8b7d; margin-bottom:12px;">Full name</label>
            <input class="appld1" type="text" placeholder="Eleanor &amp; James" style="width:100%; box-sizing:border-box; border:none; border-bottom:1px solid rgba(42,36,32,0.24); background:transparent; font-family:'Cormorant Garamond',serif; font-size:26px; color:#2A2420; padding:0 0 12px; outline:none;" >
          </div>
          <!-- field: email -->
          <div style="margin-bottom:38px;">
            <label style="display:block; font-size:11px; letter-spacing:0.24em; text-transform:uppercase; color:#9a8b7d; margin-bottom:12px;">Email</label>
            <input class="appld2" type="email" placeholder="hello@example.com" style="width:100%; box-sizing:border-box; border:none; border-bottom:1px solid rgba(42,36,32,0.24); background:transparent; font-family:'Cormorant Garamond',serif; font-size:26px; color:#2A2420; padding:0 0 12px; outline:none;" >
          </div>
          <!-- field: date (special) -->
          <div style="position:relative;">
            <label style="display:block; font-size:11px; letter-spacing:0.24em; text-transform:uppercase; color:#9a8b7d; margin-bottom:12px;">Date of event</label>
            <div style="display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid #B08D57; padding:0 0 12px;">
              <span style="font-family:'Cormorant Garamond',serif; font-size:26px; color:#2A2420;">Saturday, 14 June 2025</span>
              <span style="display:inline-flex; flex-direction:column; width:22px; height:22px; border:1px solid #B08D57; border-radius:3px; overflow:hidden;"><span style="height:6px; background:#B08D57;"></span></span>
            </div>
            <!-- mini calendar popover -->
            <div style="position:absolute; right:0; top:78px; width:300px; background:#FBF8F3; border:1px solid rgba(42,36,32,0.14); border-radius:4px; box-shadow:0 26px 50px -28px rgba(42,36,32,0.5); padding:22px 22px 24px; z-index:5;">
              <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:18px;">
                <span style="font-size:13px; color:#9a8b7d;">‹</span>
                <span style="font-family:'Cormorant Garamond',serif; font-size:20px; color:#2A2420;">June 2025</span>
                <span style="font-size:13px; color:#9a8b7d;">›</span>
              </div>
              <div style="display:grid; grid-template-columns:repeat(7,1fr); gap:2px; font-size:10px; letter-spacing:0.06em; color:#b3a596; text-align:center; margin-bottom:8px;"><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span></div>
              <div style="display:grid; grid-template-columns:repeat(7,1fr); gap:2px; text-align:center; font-size:13px; color:#544a40;">
                <span style="padding:7px 0;">1</span><span style="padding:7px 0;">2</span><span style="padding:7px 0;">3</span><span style="padding:7px 0;">4</span><span style="padding:7px 0;">5</span><span style="padding:7px 0;">6</span><span style="padding:7px 0;">7</span>
                <span style="padding:7px 0;">8</span><span style="padding:7px 0;">9</span><span style="padding:7px 0;">10</span><span style="padding:7px 0;">11</span><span style="padding:7px 0;">12</span><span style="padding:7px 0;">13</span>
                <span style="padding:7px 0; background:#B08D57; color:#F6F1EA; border-radius:50%; font-weight:600;">14</span>
                <span style="padding:7px 0;">15</span><span style="padding:7px 0;">16</span><span style="padding:7px 0;">17</span><span style="padding:7px 0;">18</span><span style="padding:7px 0;">19</span><span style="padding:7px 0;">20</span><span style="padding:7px 0;">21</span>
                <span style="padding:7px 0;">22</span><span style="padding:7px 0;">23</span><span style="padding:7px 0;">24</span><span style="padding:7px 0;">25</span><span style="padding:7px 0;">26</span><span style="padding:7px 0;">27</span><span style="padding:7px 0;">28</span>
                <span style="padding:7px 0;">29</span><span style="padding:7px 0;">30</span>
              </div>
            </div>
          </div>

          <!-- continue -->
          <div style="margin-top:140px; display:flex; align-items:center; justify-content:space-between;">
            <span style="font-size:12px; letter-spacing:0.04em; color:#9a8b7d;">Step 1 of 2</span>
            <a class="appld0" href="#" style="display:inline-flex; align-items:center; gap:12px; padding:17px 42px; background:#B08D57; color:#F6F1EA; font-size:12px; font-weight:600; letter-spacing:0.24em; text-transform:uppercase; border:1px solid #9c794a; border-radius:3px; box-shadow:inset 0 1px 0 rgba(255,255,255,0.3), 0 14px 28px -18px rgba(42,36,32,0.7); text-decoration:none;" >Continue <span style="font-size:15px;">→</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>`,
  mobile: `<div style="width:390px; min-height:800px; background:#F6F1EA; border-radius:26px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,.08); position:relative; font-family:'Mulish',sans-serif; color:#2A2420;">
    <div style="display:flex; justify-content:space-between; align-items:center; padding:18px 24px 0; font-size:13px; font-weight:600; color:#2A2420;"><span>9:41</span><span style="letter-spacing:0.12em;">▢ ▢ ▣</span></div>
    <div style="display:flex; align-items:center; justify-content:space-between; padding:14px 24px 0;">
      <span style="font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:#6B5F54;">← Back</span>
      <span style="font-size:11px; letter-spacing:0.04em; color:#9a8b7d;">Step 1 of 2</span>
    </div>
    <div style="text-align:center; padding:26px 28px 24px;">
      <div style="font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:#B08D57; margin-bottom:14px;">Begin your enquiry</div>
      <h1 style="font-family:'Cormorant Garamond',serif; font-weight:400; font-size:40px; line-height:1.04; color:#2A2420; margin:0 0 10px;">Tell me about<br>your day</h1>
      <p style="font-size:14px; line-height:1.6; color:#6B5F54; margin:0;">Three small things to start.</p>
    </div>
    <div style="margin:0 22px 26px; background:#FBF8F3; border:1px solid rgba(42,36,32,0.14); border-radius:4px; box-shadow:0 24px 44px -36px rgba(42,36,32,0.4); padding:6px;">
      <div style="border:1px solid rgba(176,141,87,0.4); border-radius:2px; padding:34px 26px 36px;">
        <div style="text-align:center; margin-bottom:30px;"><span style="display:inline-flex; align-items:center; justify-content:center; width:46px; height:46px; border:1px solid rgba(176,141,87,0.55); border-radius:50%; font-family:'Cormorant Garamond',serif; font-size:18px; color:#B08D57;">MR</span></div>
        <div style="margin-bottom:30px;">
          <label style="display:block; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:#9a8b7d; margin-bottom:10px;">Full name</label>
          <input class="applm0" type="text" placeholder="Eleanor &amp; James" style="width:100%; box-sizing:border-box; border:none; border-bottom:1px solid rgba(42,36,32,0.24); background:transparent; font-family:'Cormorant Garamond',serif; font-size:22px; color:#2A2420; padding:0 0 10px; outline:none;" >
        </div>
        <div style="margin-bottom:30px;">
          <label style="display:block; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:#9a8b7d; margin-bottom:10px;">Email</label>
          <input class="applm1" type="email" placeholder="hello@example.com" style="width:100%; box-sizing:border-box; border:none; border-bottom:1px solid rgba(42,36,32,0.24); background:transparent; font-family:'Cormorant Garamond',serif; font-size:22px; color:#2A2420; padding:0 0 10px; outline:none;" >
        </div>
        <div style="margin-bottom:8px;">
          <label style="display:block; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:#9a8b7d; margin-bottom:10px;">Date of event</label>
          <div style="display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid #B08D57; padding:0 0 10px;">
            <span style="font-family:'Cormorant Garamond',serif; font-size:22px; color:#2A2420;">Sat, 14 June 2025</span>
            <span style="display:inline-flex; flex-direction:column; width:20px; height:20px; border:1px solid #B08D57; border-radius:3px; overflow:hidden;"><span style="height:5px; background:#B08D57;"></span></span>
          </div>
        </div>
      </div>
    </div>
    <div style="padding:0 22px 34px;">
      <a href="#" style="display:flex; align-items:center; justify-content:center; gap:10px; padding:17px; background:#B08D57; color:#F6F1EA; font-size:11px; font-weight:600; letter-spacing:0.22em; text-transform:uppercase; border:1px solid #9c794a; border-radius:3px; box-shadow:inset 0 1px 0 rgba(255,255,255,0.3); text-decoration:none;">Continue <span style="font-size:14px;">→</span></a>
    </div>
  </div>`,
  css: `.appld0:hover{transform:translateY(-2px); background:#a8814d;}
.appld1:focus{border-bottom-color:#B08D57;}
.appld2:focus{border-bottom-color:#B08D57;}
.applm0:focus{border-bottom-color:#B08D57;}
.applm1:focus{border-bottom-color:#B08D57;}`,
};

export default screen;