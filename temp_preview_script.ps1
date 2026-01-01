# Timeline preview
$timelinePreview = @"
                preview: ``<div class="component-preview-placeholder">
                    <div style="padding: 1.5rem; max-width: 350px; margin: 0 auto;">
                        <div style="position: relative; padding-left: 2.5rem; padding-bottom: 1.5rem; border-left: 3px solid #667eea;">
                            <div style="position: absolute; left: -8px; top: 0; width: 12px; height: 12px; background: #667eea; border-radius: 50%;"></div>
                            <div style="color: #667eea; font-weight: 700; font-size: 0.85rem; margin-bottom: 0.4rem;">2024</div>
                            <h4 style="margin: 0 0 0.4rem 0; font-size: 1rem; font-weight: 700; color: #1a1a1a;">Latest Event</h4>
                            <p style="margin: 0; font-size: 0.85rem; color: #6b7280; line-height: 1.5;">Something amazing happened this year</p>
                        </div>
                        <div style="position: relative; padding-left: 2.5rem; padding-bottom: 1.5rem; border-left: 3px solid #667eea;">
                            <div style="position: absolute; left: -8px; top: 0; width: 12px; height: 12px; background: #667eea; border-radius: 50%;"></div>
                            <div style="color: #667eea; font-weight: 700; font-size: 0.85rem; margin-bottom: 0.4rem;">2020</div>
                            <h4 style="margin: 0 0 0.4rem 0; font-size: 1rem; font-weight: 700; color: #1a1a1a;">Major Milestone</h4>
                            <p style="margin: 0; font-size: 0.85rem; color: #6b7280; line-height: 1.5;">Important event in our history</p>
                        </div>
                        <div style="position: relative; padding-left: 2.5rem; border-left: 3px solid #667eea;">
                            <div style="position: absolute; left: -8px; top: 0; width: 12px; height: 12px; background: #667eea; border-radius: 50%;"></div>
                            <div style="color: #667eea; font-weight: 700; font-size: 0.85rem; margin-bottom: 0.4rem;">2015</div>
                            <h4 style="margin: 0 0 0.4rem 0; font-size: 1rem; font-weight: 700; color: #1a1a1a;">The Beginning</h4>
                            <p style="margin: 0; font-size: 0.85rem; color: #6b7280; line-height: 1.5;">Where our story started</p>
                        </div>
                    </div>
                </div>``,
"@

Write-Output "Timeline preview ready"
Write-Output $timelinePreview.Length
