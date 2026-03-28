import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const createLaptopGroup = (screenMaterial) => {
  const laptop = new THREE.Group();

  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: '#1d1d22',
    roughness: 0.4,
    metalness: 0.35,
  });

  const keyboardMaterial = new THREE.MeshStandardMaterial({
    color: '#2b2b32',
    roughness: 0.55,
    metalness: 0.1,
  });

  const screenBack = new THREE.Mesh(new THREE.BoxGeometry(2.35, 1.45, 0.09), bodyMaterial);
  screenBack.position.set(0, 0.9, -0.38);
  screenBack.rotation.x = -0.28;
  laptop.add(screenBack);

  const screenDisplay = new THREE.Mesh(new THREE.PlaneGeometry(2.05, 1.2), screenMaterial);
  screenDisplay.position.set(0, 0.9, -0.33);
  screenDisplay.rotation.x = -0.28;
  laptop.add(screenDisplay);

  const displayGlow = new THREE.Mesh(
    new THREE.PlaneGeometry(1.7, 0.68),
    new THREE.MeshBasicMaterial({ color: '#a03039', transparent: true, opacity: 0.32 }),
  );
  displayGlow.position.set(0, 0.9, -0.31);
  displayGlow.rotation.x = -0.28;
  laptop.add(displayGlow);

  const base = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.12, 1.65), bodyMaterial);
  base.position.set(0, 0, 0);
  laptop.add(base);

  const keyboardPanel = new THREE.Mesh(new THREE.PlaneGeometry(2.12, 1.1), keyboardMaterial);
  keyboardPanel.position.set(0, 0.07, 0.06);
  keyboardPanel.rotation.x = -Math.PI / 2;
  laptop.add(keyboardPanel);

  const trackPad = new THREE.Mesh(new THREE.PlaneGeometry(0.58, 0.38), bodyMaterial);
  trackPad.position.set(0, 0.071, 0.45);
  trackPad.rotation.x = -Math.PI / 2;
  laptop.add(trackPad);

  const logo = new THREE.Mesh(
    new THREE.CircleGeometry(0.1, 24),
    new THREE.MeshStandardMaterial({ color: '#fff0f1', emissive: '#fff0f1', emissiveIntensity: 0.35 }),
  );
  logo.position.set(0, 0.92, -0.43);
  logo.rotation.x = -0.28;
  laptop.add(logo);

  laptop.rotation.x = 0.14;
  laptop.position.y = -0.12;

  return laptop;
};

const SpiderModel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    if (typeof navigator !== 'undefined' && /jsdom/i.test(navigator.userAgent)) {
      return undefined;
    }

    let frameId;

    const scene = new THREE.Scene();
    scene.background = null;

    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 1024;
    screenCanvas.height = 512;
    const screenContext = screenCanvas.getContext('2d');
    if (!screenContext) {
      return undefined;
    }

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.colorSpace = THREE.SRGBColorSpace;

    const screenMaterial = new THREE.MeshStandardMaterial({
      map: screenTexture,
      emissive: '#ffffff',
      emissiveIntensity: 0.08,
      roughness: 0.22,
      metalness: 0.18,
    });

    const textState = {
      value: '',
      dirty: true,
    };

    const drawScreen = (text, showCaret) => {
      const width = screenCanvas.width;
      const height = screenCanvas.height;

      const gradient = screenContext.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#0f1118');
      gradient.addColorStop(1, '#1d0f13');
      screenContext.fillStyle = gradient;
      screenContext.fillRect(0, 0, width, height);

      screenContext.fillStyle = 'rgba(255, 255, 255, 0.07)';
      screenContext.fillRect(0, 0, width, 44);

      screenContext.font = 'bold 22px Manrope, sans-serif';
      screenContext.fillStyle = '#f3d1d4';
      screenContext.fillText('FunBug Laptop', 26, 30);

      screenContext.font = '16px Menlo, monospace';
      screenContext.fillStyle = '#ffb7be';
      screenContext.fillText('Type on keyboard after clicking model:', 26, 78);

      screenContext.font = '22px Menlo, monospace';
      screenContext.fillStyle = '#ffe7e9';

      const prompt = '> ';
      const baseX = 26;
      const baseY = 126;
      const maxTextWidth = width - 56;
      const lineHeight = 34;

      screenContext.fillText(prompt, baseX, baseY);

      const rawText = text || '';
      const lines = [];
      let currentLine = '';
      for (let i = 0; i < rawText.length; i += 1) {
        const char = rawText[i];
        if (char === '\n') {
          lines.push(currentLine);
          currentLine = '';
          continue;
        }
        const candidate = currentLine + char;
        if (screenContext.measureText(candidate).width > maxTextWidth - 34) {
          lines.push(currentLine);
          currentLine = char;
        } else {
          currentLine = candidate;
        }
      }
      lines.push(currentLine);

      const visibleLines = lines.slice(-6);
      visibleLines.forEach((line, index) => {
        const y = baseY + index * lineHeight;
        const x = index === 0 ? baseX + 34 : baseX;
        screenContext.fillText(line, x, y);
      });

      if (!rawText) {
        screenContext.fillStyle = 'rgba(255, 255, 255, 0.45)';
        screenContext.fillText('try: hello funbug', baseX + 34, baseY);
      }

      if (showCaret) {
        const tailLine = visibleLines[visibleLines.length - 1] || '';
        const tailIndex = visibleLines.length - 1;
        const caretX =
          (tailIndex <= 0 ? baseX + 34 : baseX) + screenContext.measureText(tailLine).width + 1;
        const caretY = baseY + tailIndex * lineHeight;
        screenContext.fillStyle = '#ffccd1';
        screenContext.fillRect(caretX, caretY - 21, 3, 24);
      }

      screenTexture.needsUpdate = true;
    };

    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0.6, 3.8);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return undefined;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.tabIndex = 0;
    renderer.domElement.style.outline = 'none';
    renderer.domElement.setAttribute('aria-label', '3D laptop model viewport');
    container.appendChild(renderer.domElement);

    const modelRotation = {
      x: 0.15,
      y: 0,
      targetX: 0.15,
      targetY: 0,
    };

    let dragging = false;
    let startX = 0;
    let startY = 0;

    const handlePointerDown = (event) => {
      dragging = true;
      startX = event.clientX;
      startY = event.clientY;
      renderer.domElement.style.cursor = 'grabbing';
      renderer.domElement.focus();
    };

    const handlePointerMove = (event) => {
      if (!dragging) {
        return;
      }

      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      startX = event.clientX;
      startY = event.clientY;

      modelRotation.targetY += deltaX * 0.01;
      modelRotation.targetX += deltaY * 0.008;
      modelRotation.targetX = THREE.MathUtils.clamp(modelRotation.targetX, -0.3, 0.45);
    };

    const stopDragging = () => {
      dragging = false;
      renderer.domElement.style.cursor = 'grab';
    };

    const handleKeyDown = (event) => {
      if (event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }

      if (event.key === 'Backspace') {
        event.preventDefault();
        textState.value = textState.value.slice(0, -1);
        textState.dirty = true;
        return;
      }

      if (event.key === 'Enter') {
        event.preventDefault();
        if (textState.value.length < 160) {
          textState.value += '\n';
          textState.dirty = true;
        }
        return;
      }

      if (event.key.length === 1) {
        event.preventDefault();
        if (textState.value.length < 160) {
          textState.value += event.key;
          textState.dirty = true;
        }
      }
    };

    renderer.domElement.addEventListener('pointerdown', handlePointerDown);
    renderer.domElement.addEventListener('keydown', handleKeyDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', stopDragging);

    const ambient = new THREE.AmbientLight('#ffffff', 0.6);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight('#ffd8db', 1.15);
    keyLight.position.set(3.5, 3.5, 2.5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight('#9fc4ff', 0.55);
    fillLight.position.set(-2.5, 1.8, -2.8);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight('#ffffff', 0.6, 8);
    rimLight.position.set(0, 1.5, 1.2);
    scene.add(rimLight);

    const laptop = createLaptopGroup(screenMaterial);
    scene.add(laptop);

    const resizeHandler = () => {
      if (!container) {
        return;
      }
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', resizeHandler);

    const clock = new THREE.Clock();

    let lastCaretState = false;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      laptop.position.y = -0.12 + Math.sin(elapsed * 1.2) * 0.04;
      laptop.rotation.z = Math.sin(elapsed * 0.95) * 0.035;

      const showCaret = Math.floor(elapsed * 1.8) % 2 === 0;
      if (textState.dirty || showCaret !== lastCaretState) {
        drawScreen(textState.value, showCaret);
        textState.dirty = false;
        lastCaretState = showCaret;
      }

      if (!dragging) {
        modelRotation.targetY += 0.004;
      }

      modelRotation.x += (modelRotation.targetX - modelRotation.x) * 0.08;
      modelRotation.y += (modelRotation.targetY - modelRotation.y) * 0.08;
      laptop.rotation.x = modelRotation.x;
      laptop.rotation.y = modelRotation.y;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resizeHandler);
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      renderer.domElement.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', stopDragging);
      renderer.dispose();
      screenTexture.dispose();
      scene.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose();
        }
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="hero-3d-canvas" role="img" aria-label="3D laptop model showcase" />;
};

export default SpiderModel;
